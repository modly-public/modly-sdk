// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMe(client: ModlyClient) {
  return {
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
    /** T1 PATCH /preferences */
    updatePreferences: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/preferences`, body, opts),
    /** T2 POST /sessions/revoke */
    // TODO: migrate me.ts to defineRoute() for typed body
    sessionsRevoke: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/sessions/revoke`, body, opts),
    /** T1 GET /export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/export`, undefined, opts),
    /** T1 DELETE / */
    delete: (opts?: RequestOptions) =>
      client._request("DELETE", `/`, undefined, opts),
    /** T1 PATCH /notifications */
    updateNotifications: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/notifications`, body, opts),
    /** T1 GET /guilds */
    listGuilds: (opts?: RequestOptions) =>
      client._request("GET", `/guilds`, undefined, opts),
    /** T2 POST /guilds/refresh */
    // TODO: migrate me.ts to defineRoute() for typed body
    guildsRefresh: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/guilds/refresh`, body, opts),
    /** T1 GET /access/:guildId */
    getGuild: (opts?: RequestOptions) =>
      client._request("GET", `/access/:guildId`, undefined, opts),
  } as const;
}
