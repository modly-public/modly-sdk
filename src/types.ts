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
