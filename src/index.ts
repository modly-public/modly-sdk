/**
 * Modly SDK — typed TypeScript client for the Modly REST API.
 *
 * Authentication is via a guild-scoped API key created in the dashboard
 * (Server Settings → API keys). Pass it as `apiKey` when constructing
 * the client; it goes out on every request as `Authorization: Bearer ...`.
 *
 * Usage:
 *
 *     import { ModlyClient } from "@modly/sdk";
 *
 *     const modly = new ModlyClient({
 *       guildId: "1234567890",
 *       apiKey:  process.env.MODLY_API_KEY!,
 *     });
 *
 *     const targets = await modly.webhooks.listTargets();
 *     await modly.webhooks.sendNow({
 *       targetIds: [targets[0]!.id],
 *       embedTemplateName: "weekly-update",
 *     });
 */
export { ModlyClient } from "./client.js";
export type { ModlyClientOptions, RequestOptions } from "./client.js";
export { ApiError } from "./errors.js";
export type * from "./types.js";
