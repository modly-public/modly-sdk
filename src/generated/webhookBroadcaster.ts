// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachWebhookBroadcaster(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/wb/schedules */
    listSchedules: (opts?: RequestOptions) =>
      client._request("GET", `/wb/schedules`, undefined, opts),
    /** T1 POST /:guildId/wb/schedules */
    wbSchedules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/schedules`, body, opts),
    /** T1 PATCH /:guildId/wb/schedules/:id */
    updateWbSchedules: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/wb/schedules/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/wb/schedules/:id */
    deleteWbSchedules: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/wb/schedules/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/wb/send */
    wbSend: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/send`, body, opts),
    /** T1 GET /:guildId/wb/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/wb/export`, undefined, opts),
  } as const;
}
