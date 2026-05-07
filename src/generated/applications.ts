// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachApplications(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/applications */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/applications`, undefined, opts),
    /** T1 POST /:guildId/applications/:alertId/resolve */
    resolve: (alertId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/applications/${encodeURIComponent(alertId)}/resolve`, body, opts),
    /** T1 POST /:guildId/applications/:alertId/dismiss */
    dismiss: (alertId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/applications/${encodeURIComponent(alertId)}/dismiss`, body, opts),
    /** T1 POST /:guildId/applications/:alertId/snooze */
    snooze: (alertId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/applications/${encodeURIComponent(alertId)}/snooze`, body, opts),
    /** T1 POST /:guildId/applications/:alertId/assign */
    assign: (alertId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/applications/${encodeURIComponent(alertId)}/assign`, body, opts),
  } as const;
}
