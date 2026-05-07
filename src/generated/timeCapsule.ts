// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachTimeCapsule(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/time-capsules */
    listTimeCapsules: (opts?: RequestOptions) =>
      client._request("GET", `/time-capsules`, undefined, opts),
    /** T1 GET /:guildId/time-capsules/export.csv */
    listExportCsv: (opts?: RequestOptions) =>
      client._request("GET", `/time-capsules/export.csv`, undefined, opts),
    /** T1 PUT /:guildId/time-capsules/assets */
    setTimeCapsulesAssets: (opts?: RequestOptions) =>
      client._request("PUT", `/time-capsules/assets`, undefined, opts),
    /** T1 POST /:guildId/time-capsules */
    timeCapsules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/time-capsules`, body, opts),
    /** T1 PATCH /:guildId/time-capsules/:capsuleId */
    updateTimeCapsules: (capsuleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/time-capsules/${encodeURIComponent(capsuleId)}`, body, opts),
    /** T1 POST /:guildId/time-capsules/:capsuleId/cancel */
    timeCapsulesCancel: (capsuleId: string, opts?: RequestOptions) =>
      client._request("POST", `/time-capsules/${encodeURIComponent(capsuleId)}/cancel`, undefined, opts),
    /** T1 POST /:guildId/time-capsules/:capsuleId/reschedule */
    timeCapsulesReschedule: (capsuleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/time-capsules/${encodeURIComponent(capsuleId)}/reschedule`, body, opts),
    /** T1 POST /:guildId/time-capsules/:capsuleId/deliver-now */
    timeCapsulesDeliverNow: (capsuleId: string, opts?: RequestOptions) =>
      client._request("POST", `/time-capsules/${encodeURIComponent(capsuleId)}/deliver-now`, undefined, opts),
  } as const;
}
