// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAfk(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/afk/me */
    listMe: (opts?: RequestOptions) =>
      client._request("GET", `/afk/me`, undefined, opts),
    /** T1 PUT /:guildId/afk/me */
    setMe: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/afk/me`, body, opts),
    /** T1 DELETE /:guildId/afk/me */
    deleteMe: (opts?: RequestOptions) =>
      client._request("DELETE", `/afk/me`, undefined, opts),
    /** T1 GET /:guildId/afk */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/afk`, undefined, opts),
    /** T1 DELETE /:guildId/afk/:targetUserId */
    delete: (targetUserId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/afk/${encodeURIComponent(targetUserId)}`, undefined, opts),
  } as const;
}
