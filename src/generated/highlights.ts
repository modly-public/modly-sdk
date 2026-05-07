// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachHighlights(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/highlights/me */
    listMe: (opts?: RequestOptions) =>
      client._request("GET", `/highlights/me`, undefined, opts),
    /** T1 POST /:guildId/highlights/me/keywords */
    meKeywords: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/highlights/me/keywords`, body, opts),
    /** T1 DELETE /:guildId/highlights/me/keywords/:keyword */
    deleteMeKeywords: (keyword: string, opts?: RequestOptions) =>
      client._request("DELETE", `/highlights/me/keywords/${encodeURIComponent(keyword)}`, undefined, opts),
    /** T1 POST /:guildId/highlights/me/mute */
    meMute: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/highlights/me/mute`, body, opts),
    /** T1 DELETE /:guildId/highlights/me/mute/:kind/:id */
    deleteMeMute: (kind: string, id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/highlights/me/mute/${encodeURIComponent(kind)}/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 PATCH /:guildId/highlights/me/prefs */
    updateMePrefs: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/highlights/me/prefs`, body, opts),
    /** T1 GET /:guildId/highlights/settings */
    listSettings: (opts?: RequestOptions) =>
      client._request("GET", `/highlights/settings`, undefined, opts),
    /** T1 PATCH /:guildId/highlights/settings */
    updateSettings: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/highlights/settings`, body, opts),
    /** T1 GET /:guildId/highlights/:userId */
    getUser: (userId: string, opts?: RequestOptions) =>
      client._request("GET", `/highlights/${encodeURIComponent(userId)}`, undefined, opts),
    /** T1 POST /:guildId/highlights/:userId */
    addUser: (userId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/highlights/${encodeURIComponent(userId)}`, body, opts),
    /** T1 DELETE /:guildId/highlights/:userId */
    deleteUser: (userId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/highlights/${encodeURIComponent(userId)}`, undefined, opts),
  } as const;
}
