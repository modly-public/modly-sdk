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
import * as gen from "./generated/index.js";

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

  // ─── Auto-generated namespaces ──────────────────────────────────────
  // One field per generated/<name>.ts. The 7 hand-rolled namespaces below
  // (modules, webhooks, embeds, moderation, safety, customCommands,
  // personas) ship richer typed responses, so we deliberately skip the
  // generated counterpart with the same name to avoid shadowing.
  readonly account: ReturnType<typeof gen.attachAccount>;
  readonly ai: ReturnType<typeof gen.attachAi>;
  readonly ama: ReturnType<typeof gen.attachAma>;
  readonly analytics: ReturnType<typeof gen.attachAnalytics>;
  readonly appealPortal: ReturnType<typeof gen.attachAppealPortal>;
  readonly appeals: ReturnType<typeof gen.attachAppeals>;
  readonly applications: ReturnType<typeof gen.attachApplications>;
  readonly auth: ReturnType<typeof gen.attachAuth>;
  readonly authUpgrade: ReturnType<typeof gen.attachAuthUpgrade>;
  readonly automations: ReturnType<typeof gen.attachAutomations>;
  readonly automod: ReturnType<typeof gen.attachAutomod>;
  readonly autoping: ReturnType<typeof gen.attachAutoping>;
  readonly autoresponders: ReturnType<typeof gen.attachAutoresponders>;
  readonly billing: ReturnType<typeof gen.attachBilling>;
  readonly captcha: ReturnType<typeof gen.attachCaptcha>;
  readonly cases: ReturnType<typeof gen.attachCases>;
  readonly channelGames: ReturnType<typeof gen.attachChannelGames>;
  readonly channelUtils: ReturnType<typeof gen.attachChannelUtils>;
  readonly commands: ReturnType<typeof gen.attachCommands>;
  readonly compatibility: ReturnType<typeof gen.attachCompatibility>;
  readonly compliance: ReturnType<typeof gen.attachCompliance>;
  readonly connections: ReturnType<typeof gen.attachConnections>;
  readonly counters: ReturnType<typeof gen.attachCounters>;
  readonly discord: ReturnType<typeof gen.attachDiscord>;
  readonly discovery: ReturnType<typeof gen.attachDiscovery>;
  readonly economy: ReturnType<typeof gen.attachEconomy>;
  readonly forms: ReturnType<typeof gen.attachForms>;
  readonly games: ReturnType<typeof gen.attachGames>;
  readonly giveaways: ReturnType<typeof gen.attachGiveaways>;
  readonly guilds: ReturnType<typeof gen.attachGuilds>;
  readonly honeypot: ReturnType<typeof gen.attachHoneypot>;
  readonly inboundWebhooks: ReturnType<typeof gen.attachInboundWebhooks>;
  readonly incidents: ReturnType<typeof gen.attachIncidents>;
  readonly integrations: ReturnType<typeof gen.attachIntegrations>;
  readonly inviteTracker: ReturnType<typeof gen.attachInviteTracker>;
  readonly leveling: ReturnType<typeof gen.attachLeveling>;
  readonly logs: ReturnType<typeof gen.attachLogs>;
  readonly mcp: ReturnType<typeof gen.attachMcp>;
  readonly me: ReturnType<typeof gen.attachMe>;
  readonly memberNotes: ReturnType<typeof gen.attachMemberNotes>;
  readonly messages: ReturnType<typeof gen.attachMessages>;
  readonly meTokens: ReturnType<typeof gen.attachMeTokens>;
  readonly modCoach: ReturnType<typeof gen.attachModCoach>;
  readonly onboarding: ReturnType<typeof gen.attachOnboarding>;
  readonly personalization: ReturnType<typeof gen.attachPersonalization>;
  readonly polls: ReturnType<typeof gen.attachPolls>;
  readonly reputation: ReturnType<typeof gen.attachReputation>;
  readonly roleEvents: ReturnType<typeof gen.attachRoleEvents>;
  readonly roles: ReturnType<typeof gen.attachRoles>;
  readonly savedResponses: ReturnType<typeof gen.attachSavedResponses>;
  readonly secrets: ReturnType<typeof gen.attachSecrets>;
  readonly serverGoals: ReturnType<typeof gen.attachServerGoals>;
  readonly serverStats: ReturnType<typeof gen.attachServerStats>;
  readonly settingsIo: ReturnType<typeof gen.attachSettingsIo>;
  readonly socialTracking: ReturnType<typeof gen.attachSocialTracking>;
  readonly starboard: ReturnType<typeof gen.attachStarboard>;
  readonly stats: ReturnType<typeof gen.attachStats>;
  readonly timeCapsule: ReturnType<typeof gen.attachTimeCapsule>;
  readonly translation: ReturnType<typeof gen.attachTranslation>;
  readonly tts: ReturnType<typeof gen.attachTts>;
  readonly userInput: ReturnType<typeof gen.attachUserInput>;
  readonly public: ReturnType<typeof gen.attachPublic>;
  readonly voiceBots: ReturnType<typeof gen.attachVoiceBots>;
  readonly voiceClipper: ReturnType<typeof gen.attachVoiceClipper>;
  readonly voiceRecording: ReturnType<typeof gen.attachVoiceRecording>;
  readonly webhookBroadcaster: ReturnType<typeof gen.attachWebhookBroadcaster>;
  readonly welcome: ReturnType<typeof gen.attachWelcome>;
  readonly workload: ReturnType<typeof gen.attachWorkload>;

  constructor(opts: ModlyClientOptions) {
    this.guildId = opts.guildId;
    this.apiKey = opts.apiKey;
    this.baseUrl = (opts.baseUrl ?? "https://modly.net").replace(/\/$/, "");
    this.fetchImpl = opts.fetch ?? globalThis.fetch.bind(globalThis);

    // Attach every generated namespace except the 7 we hand-roll below.
    this.account = gen.attachAccount(this);
    this.ai = gen.attachAi(this);
    this.ama = gen.attachAma(this);
    this.analytics = gen.attachAnalytics(this);
    this.appealPortal = gen.attachAppealPortal(this);
    this.appeals = gen.attachAppeals(this);
    this.applications = gen.attachApplications(this);
    this.auth = gen.attachAuth(this);
    this.authUpgrade = gen.attachAuthUpgrade(this);
    this.automations = gen.attachAutomations(this);
    this.automod = gen.attachAutomod(this);
    this.autoping = gen.attachAutoping(this);
    this.autoresponders = gen.attachAutoresponders(this);
    this.billing = gen.attachBilling(this);
    this.captcha = gen.attachCaptcha(this);
    this.cases = gen.attachCases(this);
    this.channelGames = gen.attachChannelGames(this);
    this.channelUtils = gen.attachChannelUtils(this);
    this.commands = gen.attachCommands(this);
    this.compatibility = gen.attachCompatibility(this);
    this.compliance = gen.attachCompliance(this);
    this.connections = gen.attachConnections(this);
    this.counters = gen.attachCounters(this);
    this.discord = gen.attachDiscord(this);
    this.discovery = gen.attachDiscovery(this);
    this.economy = gen.attachEconomy(this);
    this.forms = gen.attachForms(this);
    this.games = gen.attachGames(this);
    this.giveaways = gen.attachGiveaways(this);
    this.guilds = gen.attachGuilds(this);
    this.honeypot = gen.attachHoneypot(this);
    this.inboundWebhooks = gen.attachInboundWebhooks(this);
    this.incidents = gen.attachIncidents(this);
    this.integrations = gen.attachIntegrations(this);
    this.inviteTracker = gen.attachInviteTracker(this);
    this.leveling = gen.attachLeveling(this);
    this.logs = gen.attachLogs(this);
    this.mcp = gen.attachMcp(this);
    this.me = gen.attachMe(this);
    this.memberNotes = gen.attachMemberNotes(this);
    this.messages = gen.attachMessages(this);
    this.meTokens = gen.attachMeTokens(this);
    this.modCoach = gen.attachModCoach(this);
    this.onboarding = gen.attachOnboarding(this);
    this.personalization = gen.attachPersonalization(this);
    this.polls = gen.attachPolls(this);
    this.reputation = gen.attachReputation(this);
    this.roleEvents = gen.attachRoleEvents(this);
    this.roles = gen.attachRoles(this);
    this.savedResponses = gen.attachSavedResponses(this);
    this.secrets = gen.attachSecrets(this);
    this.serverGoals = gen.attachServerGoals(this);
    this.serverStats = gen.attachServerStats(this);
    this.settingsIo = gen.attachSettingsIo(this);
    this.socialTracking = gen.attachSocialTracking(this);
    this.starboard = gen.attachStarboard(this);
    this.stats = gen.attachStats(this);
    this.timeCapsule = gen.attachTimeCapsule(this);
    this.translation = gen.attachTranslation(this);
    this.tts = gen.attachTts(this);
    this.userInput = gen.attachUserInput(this);
    this.public = gen.attachPublic(this);
    this.voiceBots = gen.attachVoiceBots(this);
    this.voiceClipper = gen.attachVoiceClipper(this);
    this.voiceRecording = gen.attachVoiceRecording(this);
    this.webhookBroadcaster = gen.attachWebhookBroadcaster(this);
    this.welcome = gen.attachWelcome(this);
    this.workload = gen.attachWorkload(this);
  }

  /**
   * Low-level transport. Intentionally public (underscore-prefixed to
   * signal "internal but reachable") so the auto-generated namespace
   * attachers in `./generated/` can dispatch requests without each
   * having to re-implement auth + URL composition.
   *
   * Prefer the typed namespace methods (`client.modules.list()`,
   * `client.automod.listRules()`, …) over calling this directly.
   */
  async _request<T>(
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
      this._request<{ modules: ModuleSummary[] }>("GET", `/modules${this.querySuffix({ locale })}`, undefined, opts).then((r) => r.modules),
    schema: (key: string, locale?: string, opts?: RequestOptions) =>
      this._request<{ schema: ModuleConfigSchema }>(
        "GET",
        `/modules/${encodeURIComponent(key)}/schema${this.querySuffix({ locale })}`,
        undefined,
        opts,
      ).then((r) => r.schema),
  };

  // ─── Webhooks ────────────────────────────────────────────────────────
  readonly webhooks = {
    events: (locale?: string, opts?: RequestOptions) =>
      this._request<WebhookEventCatalog>(
        "GET",
        `/outbound-webhooks/events${this.querySuffix({ locale })}`,
        undefined,
        opts,
      ),
    listTargets: (opts?: RequestOptions) =>
      this._request<{ targets: WebhookTarget[] }>("GET", `/wb/targets`, undefined, opts).then((r) => r.targets),
    listGroups: (opts?: RequestOptions) =>
      this._request<{ groups: WebhookGroup[] }>("GET", `/wb/groups`, undefined, opts).then((r) => r.groups),
    listSchedules: (opts?: RequestOptions) =>
      this._request<{ schedules: WebhookSchedule[] }>("GET", `/wb/schedules`, undefined, opts).then((r) => r.schedules),
    preview: (input: {
      event?: string;
      payload?: Record<string, unknown>;
      payloadMode?: "envelope" | "custom" | "merge";
      payloadTemplate?: Record<string, unknown> | null;
      headers?: Record<string, unknown> | null;
      apiVersion?: string;
    }, opts?: RequestOptions) =>
      this._request<{ payload: unknown; headers: unknown }>("POST", `/outbound-webhooks/preview`, input, opts),
    list: (opts?: RequestOptions) =>
      this._request<{ hooks: unknown[]; analytics: unknown }>("GET", `/outbound-webhooks`, undefined, opts),
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<{ hook: unknown }>("POST", `/outbound-webhooks`, body, opts).then((r) => r.hook),
    update: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<{ hook: unknown }>("PATCH", `/outbound-webhooks/${encodeURIComponent(hookId)}`, body, opts).then((r) => r.hook),
    test: (hookId: string, body: { event?: string; payload?: Record<string, unknown> }, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("POST", `/outbound-webhooks/${encodeURIComponent(hookId)}/test`, body, opts),
    replay: (hookId: string, deliveryId: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>(
        "POST",
        `/outbound-webhooks/${encodeURIComponent(hookId)}/deliveries/${encodeURIComponent(deliveryId)}/replay`,
        undefined,
        opts,
      ),
    delete: (hookId: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>("DELETE", `/outbound-webhooks/${encodeURIComponent(hookId)}`, undefined, opts),
    sendNow: (input: WebhookSendInput, opts?: RequestOptions) =>
      this._request<{ results: WebhookSendResult[] }>("POST", `/wb/send`, input, opts).then((r) => r.results),
  };

  // ─── Embed templates ─────────────────────────────────────────────────
  readonly embeds = {
    list: (opts?: RequestOptions) =>
      this._request<{ templates: EmbedTemplate[] }>("GET", `/embeds`, undefined, opts).then((r) => r.templates),
    save: (name: string, json: StoredMessage, opts?: RequestOptions) =>
      this._request<{ template: EmbedTemplate }>("PUT", `/embeds`, { name, json }, opts).then((r) => r.template),
    duplicate: (name: string, body: { name: string; description?: string | null; folder?: string | null; tags?: string[] }, opts?: RequestOptions) =>
      this._request<{ template: EmbedTemplate }>("POST", `/embeds/${encodeURIComponent(name)}/duplicate`, body, opts).then((r) => r.template),
    delete: (name: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>("DELETE", `/embeds/${encodeURIComponent(name)}`, undefined, opts),
    sendToChannel: (name: string, channelId: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>(
        "POST",
        `/embeds/${encodeURIComponent(name)}/send`,
        { channelId },
        opts,
      ),
    versions: (name: string, opts?: RequestOptions) =>
      this._request<{ versions: Array<{ version: number; createdAt: string; authorId: string }> }>(
        "GET",
        `/embeds/${encodeURIComponent(name)}/versions`,
        undefined,
        opts,
      ).then((r) => r.versions),
    restoreVersion: (name: string, version: number, opts?: RequestOptions) =>
      this._request<{ template: EmbedTemplate }>(
        "POST",
        `/embeds/${encodeURIComponent(name)}/versions/${version}/restore`,
        undefined,
        opts,
      ).then((r) => r.template),
  };

  // ─── Moderation ──────────────────────────────────────────────────────
  // Hand-rolled because the generated `cases` namespace returns
  // `unknown` instead of the typed ModerationCase[]. Path matches the
  // bot route at `casesRouter.get("/:guildId/cases", …)` — historical
  // versions of this SDK pointed at `/moderation/cases` which never
  // existed; treat that as a buggy alias and use `/cases` here.
  readonly moderation = {
    listCases: (opts?: RequestOptions & { userId?: string; limit?: number }) => {
      const qs = new URLSearchParams();
      if (opts?.userId) qs.set("userId", opts.userId);
      if (opts?.limit) qs.set("limit", String(opts.limit));
      const suffix = qs.size > 0 ? `?${qs.toString()}` : "";
      return this._request<{ cases: ModerationCase[] }>("GET", `/cases${suffix}`, undefined, opts).then(
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
      return this._request<{ detections: EvaderDetectionRun[] }>(
        "GET",
        `/safety/evader-detections${suffix}`,
        undefined,
        opts,
      ).then((r) => r.detections);
    },
    resolveEvaderDetection: (id: string, resolution: EvaderResolution, opts?: RequestOptions) =>
      this._request<{ detection: EvaderDetectionRun }>(
        "POST",
        `/safety/evader-detections/${encodeURIComponent(id)}/resolve`,
        { resolution },
        opts,
      ).then((r) => r.detection),
  };

  // ─── Custom commands ────────────────────────────────────────────────
  readonly customCommands = {
    overview: (opts?: RequestOptions) =>
      this._request<{
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
      this._request<{ command: CustomCommandRecord; overview: unknown }>("POST", `/custom-commands/commands`, body, opts),
    preview: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("POST", `/custom-commands/preview`, body, opts),
    delete: (id: string, opts?: RequestOptions) =>
      this._request<{ ok: true; overview: unknown }>("DELETE", `/custom-commands/commands/${encodeURIComponent(id)}`, undefined, opts),
    export: (opts?: RequestOptions) =>
      this._request<{ schemaVersion: number; moduleKey: string; exportedAt: string; commands: CustomCommandRecord[] }>(
        "GET",
        `/custom-commands/export`,
        undefined,
        opts,
      ),
    import: (commands: unknown[], opts?: RequestOptions) =>
      this._request<{ ok: true; overview: unknown }>("POST", `/custom-commands/import`, { commands }, opts),
  };

  // ─── Personas ───────────────────────────────────────────────────────
  readonly personas = {
    list: (opts?: RequestOptions) =>
      this._request<PersonasResponse>("GET", `/personas`, undefined, opts),
    createPreset: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("POST", `/personas/presets`, body, opts),
    updatePreset: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("PATCH", `/personas/presets/${encodeURIComponent(id)}`, body, opts),
    deletePreset: (id: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>("DELETE", `/personas/presets/${encodeURIComponent(id)}`, undefined, opts),
    createOwn: (body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("POST", `/personas/own`, body, opts),
    updateOwn: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      this._request<Record<string, unknown>>("PATCH", `/personas/own/${encodeURIComponent(id)}`, body, opts),
    deleteOwn: (id: string, opts?: RequestOptions) =>
      this._request<{ ok: true }>("DELETE", `/personas/own/${encodeURIComponent(id)}`, undefined, opts),
  };
}
