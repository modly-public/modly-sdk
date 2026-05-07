// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachWebhookBroadcaster(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/wb/targets */
    listTargets: (opts?: RequestOptions) =>
      client._request("GET", `/wb/targets`, undefined, opts),
    /** T1 POST /:guildId/wb/targets */
    wbTargets: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/targets`, body, opts),
    /** T1 PATCH /:guildId/wb/targets/:id */
    updateWbTargets: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/wb/targets/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/wb/targets/:id */
    deleteWbTargets: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/wb/targets/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 GET /:guildId/wb/groups */
    listGroups: (opts?: RequestOptions) =>
      client._request("GET", `/wb/groups`, undefined, opts),
    /** T1 POST /:guildId/wb/groups */
    wbGroups: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/groups`, body, opts),
    /** T1 PATCH /:guildId/wb/groups/:id */
    updateWbGroups: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/wb/groups/${encodeURIComponent(id)}`, body, opts),
    /** T1 POST /:guildId/wb/groups/:id/duplicate */
    wbGroupsDuplicate: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/groups/${encodeURIComponent(id)}/duplicate`, body, opts),
    /** T1 POST /:guildId/wb/groups/:id/copy-targets */
    wbGroupsCopyTargets: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/wb/groups/${encodeURIComponent(id)}/copy-targets`, body, opts),
    /** T1 DELETE /:guildId/wb/groups/:id */
    deleteWbGroups: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/wb/groups/${encodeURIComponent(id)}`, undefined, opts),
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
