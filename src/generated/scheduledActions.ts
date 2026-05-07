// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachScheduledActions(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/scheduled-actions */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/scheduled-actions`, undefined, opts),
    /** T1 GET /:guildId/scheduled-actions/:id */
    getId: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/scheduled-actions/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/scheduled-actions */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/scheduled-actions`, body, opts),
    /** T1 PATCH /:guildId/scheduled-actions/:id */
    updateId: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/scheduled-actions/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/scheduled-actions/:id */
    deleteId: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/scheduled-actions/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/scheduled-actions/:id/run */
    run: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/scheduled-actions/${encodeURIComponent(id)}/run`, undefined, opts),
  } as const;
}
