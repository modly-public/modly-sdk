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
  ModuleConfigSchema,
  ModuleSummary,
  EvaderDetectionRun,
  EvaderResolution,
  CustomCommandsOverview,
  CustomCommandRecord,
  ModerationCase,
  PersonasResponse,
  StoredMessage,
  WebhookEventCatalog,
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

  private querySuffix(params: Record<string, string | number | boolean | undefined | null>): string {
    const qs = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || value === "") continue;
      qs.set(key, String(value));
    }
    return qs.size > 0 ? `?${qs.toString()}` : "";
  }

  // ─── Modules ────────────────────────────────────────────────────────
  readonly modules = {
    list: (locale?: string, opts?: RequestOptions) =>
      this.request<{ modules: ModuleSummary[] }>("GET", `/modules${this.querySuffix({ locale })}`, undefined, opts).then((r) => r.modules),
    schema: (key: string, locale?: string, opts?: RequestOptions) =>
      this.request<{ schema: ModuleConfigSchema }>(
        "GET",
        `/modules/${encodeURIComponent(key)}/schema${this.querySuffix({ locale })}`,
        undefined,
        opts,
      ).then((r) => r.schema),
  };

  // ─── Webhooks ────────────────────────────────────────────────────────
  readonly webhooks = {
    events: (locale?: string, opts?: RequestOptions) =>
      this.request<WebhookEventCatalog>(
        "GET",
        `/outbound-webhooks/events${this.querySuffix({ locale })}`,
        undefined,
        opts,
      ),
    listTargets: (opts?: RequestOptions) =>
      this.request<{ targets: WebhookTarget[] }>("GET", `/wb/targets`, undefined, opts).then((r) => r.targets),
    listGroups: (opts?: RequestOptions) =>
      this.request<{ groups: WebhookGroup[] }>("GET", `/wb/groups`, undefined, opts).then((r) => r.groups),
    listSchedules: (opts?: RequestOptions) =>
      this.request<{ schedules: WebhookSchedule[] }>("GET", `/wb/schedules`, undefined, opts).then((r) => r.schedules),
    preview: (input: {
      event?: string;
      payload?: Record<string, unknown>;
      payloadMode?: "envelope" | "custom" | "merge";
      payloadTemplate?: Record<string, unknown> | null;
      headers?: Record<string, unknown> | null;
      apiVersion?: string;
    }, opts?: RequestOptions) =>
      this.request<{ payload: unknown; headers: unknown }>("POST", `/outbound-webhooks/preview`, input, opts),
    list: (opts?: RequestOptions) =>
      this.request<{ hooks: unknown[]; analytics: unknown }>("GET", `/outbound-webhooks`, undefined, opts),
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<{ hook: unknown }>("POST", `/outbound-webhooks`, body, opts).then((r) => r.hook),
    update: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<{ hook: unknown }>("PATCH", `/outbound-webhooks/${encodeURIComponent(hookId)}`, body, opts).then((r) => r.hook),
    test: (hookId: string, body: { event?: string; payload?: Record<string, unknown> }, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("POST", `/outbound-webhooks/${encodeURIComponent(hookId)}/test`, body, opts),
    replay: (hookId: string, deliveryId: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>(
        "POST",
        `/outbound-webhooks/${encodeURIComponent(hookId)}/deliveries/${encodeURIComponent(deliveryId)}/replay`,
        undefined,
        opts,
      ),
    delete: (hookId: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>("DELETE", `/outbound-webhooks/${encodeURIComponent(hookId)}`, undefined, opts),
    sendNow: (input: WebhookSendInput, opts?: RequestOptions) =>
      this.request<{ results: WebhookSendResult[] }>("POST", `/wb/send`, input, opts).then((r) => r.results),
  };

  // ─── Embed templates ─────────────────────────────────────────────────
  readonly embeds = {
    list: (opts?: RequestOptions) =>
      this.request<{ templates: EmbedTemplate[] }>("GET", `/embeds`, undefined, opts).then((r) => r.templates),
    save: (name: string, json: StoredMessage, opts?: RequestOptions) =>
      this.request<{ template: EmbedTemplate }>("PUT", `/embeds`, { name, json }, opts).then((r) => r.template),
    duplicate: (name: string, body: { name: string; description?: string | null; folder?: string | null; tags?: string[] }, opts?: RequestOptions) =>
      this.request<{ template: EmbedTemplate }>("POST", `/embeds/${encodeURIComponent(name)}/duplicate`, body, opts).then((r) => r.template),
    delete: (name: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>("DELETE", `/embeds/${encodeURIComponent(name)}`, undefined, opts),
    sendToChannel: (name: string, channelId: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>(
        "POST",
        `/embeds/${encodeURIComponent(name)}/send`,
        { channelId },
        opts,
      ),
    versions: (name: string, opts?: RequestOptions) =>
      this.request<{ versions: Array<{ version: number; createdAt: string; authorId: string }> }>(
        "GET",
        `/embeds/${encodeURIComponent(name)}/versions`,
        undefined,
        opts,
      ).then((r) => r.versions),
    restoreVersion: (name: string, version: number, opts?: RequestOptions) =>
      this.request<{ template: EmbedTemplate }>(
        "POST",
        `/embeds/${encodeURIComponent(name)}/versions/${version}/restore`,
        undefined,
        opts,
      ).then((r) => r.template),
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

  // ─── Custom commands ────────────────────────────────────────────────
  readonly customCommands = {
    overview: (opts?: RequestOptions) =>
      this.request<{
        commands: CustomCommandRecord[];
        summary: CustomCommandsOverview["summary"];
        analytics: CustomCommandsOverview["analytics"];
        variables: string[];
        actionTypes: string[];
        buttonTypes: string[];
      }>("GET", `/custom-commands`, undefined, opts),
    list: (opts?: RequestOptions) =>
      this.customCommands.overview(opts).then((r) => r.commands),
    save: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<{ command: CustomCommandRecord; overview: unknown }>("POST", `/custom-commands/commands`, body, opts),
    preview: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("POST", `/custom-commands/preview`, body, opts),
    delete: (id: string, opts?: RequestOptions) =>
      this.request<{ ok: true; overview: unknown }>("DELETE", `/custom-commands/commands/${encodeURIComponent(id)}`, undefined, opts),
    export: (opts?: RequestOptions) =>
      this.request<{ schemaVersion: number; moduleKey: string; exportedAt: string; commands: CustomCommandRecord[] }>(
        "GET",
        `/custom-commands/export`,
        undefined,
        opts,
      ),
    import: (commands: unknown[], opts?: RequestOptions) =>
      this.request<{ ok: true; overview: unknown }>("POST", `/custom-commands/import`, { commands }, opts),
  };

  // ─── Personas ───────────────────────────────────────────────────────
  readonly personas = {
    list: (opts?: RequestOptions) =>
      this.request<PersonasResponse>("GET", `/personas`, undefined, opts),
    createPreset: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("POST", `/personas/presets`, body, opts),
    updatePreset: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("PATCH", `/personas/presets/${encodeURIComponent(id)}`, body, opts),
    deletePreset: (id: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>("DELETE", `/personas/presets/${encodeURIComponent(id)}`, undefined, opts),
    createOwn: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("POST", `/personas/own`, body, opts),
    updateOwn: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this.request<Record<string, unknown>>("PATCH", `/personas/own/${encodeURIComponent(id)}`, body, opts),
    deleteOwn: (id: string, opts?: RequestOptions) =>
      this.request<{ ok: true }>("DELETE", `/personas/own/${encodeURIComponent(id)}`, undefined, opts),
  };
}
