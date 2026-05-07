// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSuggestions(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/suggestions */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/suggestions`, undefined, opts),
    /** T1 GET /:guildId/suggestions/:subId */
    getSub: (subId: string, opts?: RequestOptions) =>
      client._request("GET", `/suggestions/${encodeURIComponent(subId)}`, undefined, opts),
    /** T1 POST /:guildId/suggestions/:subId/decide */
    decide: (subId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/suggestions/${encodeURIComponent(subId)}/decide`, body, opts),
    /** T1 POST /:guildId/suggestions/:subId/comments */
    comments: (subId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/suggestions/${encodeURIComponent(subId)}/comments`, body, opts),
    /** T1 DELETE /:guildId/suggestions/:subId */
    delete: (subId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/suggestions/${encodeURIComponent(subId)}`, undefined, opts),
  } as const;
}
