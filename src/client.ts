/**
 * Low-level HTTP transport + namespaced API surface.
 *
 * One `ModlyClient` per guild is the intended use — auth scope is the
 * guild-pinned API key. A single client can be reused across the
 * lifetime of the host process; it's stateless beyond the auth header.
 */
import { ApiError } from "./errors.js";
import type {
  EmbedTemplate,
  EvaderDetectionRun,
  EvaderResolution,
  ModerationCase,
  StoredMessage,
  WebhookGroup,
  WebhookSchedule,
  WebhookSendInput,
  WebhookSendResult,
  WebhookTarget,
} from "./types.js";

export interface ModlyClientOptions {
  /** Snowflake of the Discord guild the API key is scoped to. */
  guildId: string;
  /** Personal access token (modly_pat_…) created in dashboard → Account Settings → API tokens. */
  apiKey: string;
  /** Defaults to https://modly.net. Override for self-host or staging. */
  baseUrl?: string;
  /** Custom fetch (e.g. `undici` agent, edge runtimes). Defaults to global fetch. */
  fetch?: typeof fetch;
}

export interface RequestOptions {
  signal?: AbortSignal;
}

export class ModlyClient {
  readonly guildId: string;
  readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly fetchImpl: typeof fetch;

  constructor(opts: ModlyClientOptions) {
    this.guildId = opts.guildId;
    this.apiKey = opts.apiKey;
    this.baseUrl = (opts.baseUrl ?? "https://modly.net").replace(/\/$/, "");
    this.fetchImpl = opts.fetch ?? globalThis.fetch.bind(globalThis);
  }

  private async request<T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    path: string,
    body?: unknown,
    opts?: RequestOptions,
  ): Promise<T> {
    const url = `${this.baseUrl}/api/guilds/${this.guildId}${path}`;
    const init: RequestInit = {
      method,
      headers: {
        "authorization": `Bearer ${this.apiKey}`,
        ...(body !== undefined ? { "content-type": "application/json" } : {}),
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      ...(opts?.signal ? { signal: opts.signal } : {}),
    };
    const res = await this.fetchImpl(url, init);
    if (!res.ok) {
      let parsed: unknown = null;
      try {
        parsed = await res.json();
      } catch {
        /* swallow */
      }
      const code =
        parsed && typeof parsed === "object" && "error" in parsed && typeof parsed.error === "string"
          ? parsed.error
          : `http_${res.status}`;
      throw new ApiError(res.status, code, parsed);
    }
    if (res.status === 204) return undefined as T;
    return (await res.json()) as T;
  }

  // ─── Webhooks ────────────────────────────────────────────────────────
  readonly webhooks = {
    listTargets: (opts?: RequestOptions) =>
      this.request<{ targets: WebhookTarget[] }>("GET", `/wb/targets`, undefined, opts).then((r) => r.targets),
    listGroups: (opts?: RequestOptions) =>
      this.request<{ groups: WebhookGroup[] }>("GET", `/wb/groups`, undefined, opts).then((r) => r.groups),
    listSchedules: (opts?: RequestOptions) =>
      this.request<{ schedules: WebhookSchedule[] }>("GET", `/wb/schedules`, undefined, opts).then((r) => r.schedules),
    sendNow: (input: WebhookSendInput, opts?: RequestOptions) =>
      this.request<{ results: WebhookSendResult[] }>("POST", `/wb/send`, input, opts).then((r) => r.results),
  };

  // ─── Embed templates ─────────────────────────────────────────────────
  readonly embeds = {
    list: (opts?: RequestOptions) =>
      this.request<{ templates: EmbedTemplate[] }>("GET", `/embeds`, undefined, opts).then((r) => r.templates),
    save: (name: string, json: StoredMessage, opts?: RequestOptions) =>
      this.request<{ template: EmbedTemplate }>("PUT", `/embeds`, { name, json }, opts).then((r) => r.template),
    delete: (name: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>("DELETE", `/embeds/${encodeURIComponent(name)}`, undefined, opts),
    sendToChannel: (name: string, channelId: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>(
        "POST",
        `/embeds/${encodeURIComponent(name)}/send`,
        { channelId },
        opts,
      ),
  };

  // ─── Moderation ──────────────────────────────────────────────────────
  readonly moderation = {
    listCases: (opts?: RequestOptions & { userId?: string; limit?: number }) => {
      const qs = new URLSearchParams();
      if (opts?.userId) qs.set("userId", opts.userId);
      if (opts?.limit) qs.set("limit", String(opts.limit));
      const suffix = qs.size > 0 ? `?${qs.toString()}` : "";
      return this.request<{ cases: ModerationCase[] }>("GET", `/moderation/cases${suffix}`, undefined, opts).then(
        (r) => r.cases,
      );
    },
  };

  // ─── Safety ─────────────────────────────────────────────────────────
  readonly safety = {
    listEvaderDetections: (opts?: RequestOptions & { userId?: string; riskBand?: string; unresolved?: boolean; limit?: number }) => {
      const qs = new URLSearchParams();
      if (opts?.userId) qs.set("userId", opts.userId);
      if (opts?.riskBand) qs.set("riskBand", opts.riskBand);
      if (opts?.unresolved !== undefined) qs.set("unresolved", String(opts.unresolved));
      if (opts?.limit) qs.set("limit", String(opts.limit));
      const suffix = qs.size > 0 ? `?${qs.toString()}` : "";
      return this.request<{ detections: EvaderDetectionRun[] }>(
        "GET",
        `/safety/evader-detections${suffix}`,
        undefined,
        opts,
      ).then((r) => r.detections);
    },
    resolveEvaderDetection: (id: string, resolution: EvaderResolution, opts?: RequestOptions) =>
      this.request<{ detection: EvaderDetectionRun }>(
        "POST",
        `/safety/evader-detections/${encodeURIComponent(id)}/resolve`,
        { resolution },
        opts,
      ).then((r) => r.detection),
  };
}
