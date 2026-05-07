// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSocialTracking(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/social-tracking */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/social-tracking`, undefined, opts),
    /** T1 POST /:guildId/social-tracking/subscriptions */
    subscriptions: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/social-tracking/subscriptions`, body, opts),
    /** T1 POST /:guildId/social-tracking/test */
    test: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/social-tracking/test`, body, opts),
    /** T1 DELETE /:guildId/social-tracking/subscriptions/:id */
    deleteSubscriptions: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/social-tracking/subscriptions/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/social-tracking/subscriptions/:id/replay */
    subscriptionsReplay: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/social-tracking/subscriptions/${encodeURIComponent(id)}/replay`, undefined, opts),
    /** T1 POST /:guildId/social-tracking/subscriptions/:id/reset-cursor */
    subscriptionsResetCursor: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/social-tracking/subscriptions/${encodeURIComponent(id)}/reset-cursor`, undefined, opts),
    /** T1 GET /:guildId/social-tracking/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/social-tracking/export`, undefined, opts),
    /** T1 POST /:guildId/social-tracking/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/social-tracking/import`, body, opts),
  } as const;
}
