/**
 * Public types used by the SDK. These mirror the JSON shapes the API
 * returns — generation from the canonical zod schemas in the bot will
 * land in 0.2; for now they're hand-written and kept narrow on purpose.
 */

export interface ApiEmbed {
  title?: string;
  description?: string;
  url?: string;
  color?: number;
  timestamp?: string;
  author?: { name: string; url?: string; icon_url?: string };
  footer?: { text: string; icon_url?: string };
  image?: { url: string };
  thumbnail?: { url: string };
  fields?: { name: string; value: string; inline?: boolean }[];
}

export interface StoredMessage {
  content?: string;
  embeds?: ApiEmbed[];
}

// ─── Modules ───────────────────────────────────────────────────────────

export interface ModuleSummary {
  key: string;
  name: string;
  description: string;
  category: string;
  premium: number | null;
}

export interface ModuleConfigSchema {
  views: ConfigCategoryView[];
}

export interface ConfigCategoryView {
  key: string;
  label?: string;
  description?: string;
  settings: SettingDef[];
  subcategories?: ConfigCategoryView[];
}

export interface SettingDef {
  key: string;
  label?: string;
  description?: string;
  kind: SettingKind;
}

export type SettingKind =
  | { type: string; [key: string]: unknown }
  | { type: "select"; options: Array<{ value: string; label?: string }> }
  | { type: "multiselect"; options: Array<{ value: string; label?: string }> }
  | { type: "list"; itemKind: SettingKind };

// ─── Custom commands ───────────────────────────────────────────────────

export interface CustomCommandRecord {
  id: string;
  guildId: string;
  name: string;
  description: string | null;
  aliases: string[];
  triggerMode: "prefix" | "exact" | "contains" | "regex";
  response: string;
  responseMode: "reply" | "channel" | "dm" | "silent";
  isEmbed: boolean;
  embedJson: Record<string, unknown> | null;
  attachmentUrls: string[];
  reactEmojis: string[];
  buttons: Array<{ label?: string; url?: string; emoji?: string }>;
  actions: Array<Record<string, unknown>>;
  allowedMentions: string[];
  cooldownSec: number;
  cooldownScope: "user" | "channel" | "guild" | "member_channel";
  allowedRoleIds: string[];
  deniedRoleIds: string[];
  allowedChannelIds: string[];
  deniedChannelIds: string[];
  allowedUserIds: string[];
  deniedUserIds: string[];
  requireAllRoles: boolean;
  deleteTrigger: boolean;
  enabled: boolean;
  priority: number;
  authorId: string | null;
  uses: number;
  lastUsedAt: string | null;
  lastError: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CustomCommandsOverview {
  summary: {
    commands: number;
    enabled: number;
    uses: number;
    used30d: number;
    failed30d: number;
    actions: number;
  };
  commands: CustomCommandRecord[];
  analytics: {
    byTrigger: Array<{ triggerMode: string; count: number }>;
    byResponse: Array<{ responseMode: string; count: number }>;
    byType: Array<{ type: string; count: number }>;
    topCommands: Array<{ id: string; name: string; uses: number; lastUsedAt: string | null }>;
    recentEvents: Array<{ id: string; type: string; targetId: string | null; channelId: string | null; data: unknown; createdAt: string }>;
  };
  variables: string[];
  actionTypes: string[];
  buttonTypes: string[];
}

// ─── Personas ──────────────────────────────────────────────────────────

export interface PersonaPromptPreset {
  name: string;
  prompt: string;
  description: string;
}

export interface PersonaRecord {
  id: string;
  guildId: string;
  userId?: string | null;
  name: string;
  avatarUrl: string | null;
  systemPrompt: string | null;
  allowedRoleIds: string[];
  blockedChannelIds: string[];
  isArchived: boolean;
  isPinned: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PersonasResponse {
  presets: PersonaRecord[];
  own: PersonaRecord[];
  builtins: PersonaPromptPreset[];
}

// ─── Webhooks ──────────────────────────────────────────────────────────

export interface WebhookEventCatalog {
  categories: Array<{
    key: string;
    label: string;
    description: string;
    events: Array<{ name: string; description: string }>;
  }>;
  variables: string[];
  examples: Record<string, unknown>;
}

// ─── Webhooks ──────────────────────────────────────────────────────────

export interface WebhookTarget {
  id: string;
  name: string;
  partnerName: string | null;
  external: boolean;
  pingRoleId: string | null;
  pingHere: boolean;
  pingEveryone: boolean;
  enabled: boolean;
}

export interface WebhookGroup {
  id: string;
  name: string;
  targetIds: string[];
}

export interface WebhookSchedule {
  id: string;
  cron: string;
  embedTemplateName: string;
  contentTemplate: string | null;
  targetId: string | null;
  groupId: string | null;
  enabled: boolean;
  lastRunAt: string | null;
}

export interface WebhookSendResult {
  targetId: string;
  result: { ok: boolean; status?: number; error?: string };
}

export interface WebhookSendInput {
  targetIds: string[];
  content?: string;
  embedTemplateName?: string;
  embed?: ApiEmbed;
  embeds?: ApiEmbed[];
}

// ─── Embeds (templates) ────────────────────────────────────────────────

export interface EmbedTemplate {
  id: string;
  name: string;
  json: StoredMessage;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Moderation ────────────────────────────────────────────────────────

export interface ModerationCase {
  id: string;
  guildId: string;
  userId: string;
  moderatorId: string;
  action: "warn" | "mute" | "kick" | "ban" | "softban";
  reason: string | null;
  createdAt: string;
  expiresAt: string | null;
}

// ─── Safety ───────────────────────────────────────────────────────────

export type EvaderRiskBand = "none" | "low" | "medium" | "high" | "critical";
export type EvaderResolution = "reviewed" | "ignored" | "confirmed" | "false_positive";

export interface EvaderDetectionRun {
  id: string;
  guildId: string;
  userId: string;
  score: number;
  riskBand: EvaderRiskBand;
  decision: string;
  action: string;
  threshold: number;
  signals: unknown;
  summary: string;
  createdCaseId: string | null;
  resolvedAt: string | null;
  resolvedBy: string | null;
  resolution: EvaderResolution | null;
  createdAt: string;
}
