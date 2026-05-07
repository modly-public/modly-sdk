// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCompatibility(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/compatibility/history */
    listHistory: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/history`, undefined, opts),
    /** T1 GET /:guildId/compatibility/should-meet */
    listShouldMeet: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/should-meet`, undefined, opts),
    /** T1 GET /:guildId/compatibility/lost */
    listLost: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/lost`, undefined, opts),
    /** T1 GET /:guildId/compatibility/report */
    listReport: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/report`, undefined, opts),
    /** T1 GET /:guildId/compatibility/report.pdf */
    listReportPdf: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/report.pdf`, undefined, opts),
    /** T1 GET /:guildId/compatibility/report.png */
    listReportPng: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/report.png`, undefined, opts),
    /** T1 GET /:guildId/compatibility/edges */
    listEdges: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/edges`, undefined, opts),
    /** T1 GET /:guildId/compatibility/summary */
    listSummary: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/summary`, undefined, opts),
    /** T1 GET /:guildId/compatibility/graph */
    listGraph: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/graph`, undefined, opts),
    /** T1 GET /:guildId/compatibility/members */
    listMembers: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/members`, undefined, opts),
    /** T1 GET /:guildId/compatibility/pair */
    listPair: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/pair`, undefined, opts),
    /** T1 GET /:guildId/compatibility/views */
    listViews: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/views`, undefined, opts),
    /** T1 POST /:guildId/compatibility/views */
    views: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/compatibility/views`, body, opts),
    /** T1 PATCH /:guildId/compatibility/views/:viewId */
    updateViews: (viewId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/compatibility/views/${encodeURIComponent(viewId)}`, body, opts),
    /** T1 POST /:guildId/compatibility/views/:viewId/clone */
    viewsClone: (viewId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/compatibility/views/${encodeURIComponent(viewId)}/clone`, body, opts),
    /** T1 DELETE /:guildId/compatibility/views/:viewId */
    deleteViews: (viewId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/compatibility/views/${encodeURIComponent(viewId)}`, undefined, opts),
    /** T1 GET /:guildId/compatibility/snapshots */
    listSnapshots: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/snapshots`, undefined, opts),
    /** T1 POST /:guildId/compatibility/snapshots */
    snapshots: (opts?: RequestOptions) =>
      client._request("POST", `/compatibility/snapshots`, undefined, opts),
    /** T1 GET /:guildId/compatibility/alerts */
    listAlerts: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/alerts`, undefined, opts),
    /** T1 GET /:guildId/compatibility/correlations */
    listCorrelations: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/correlations`, undefined, opts),
    /** T1 GET /:guildId/compatibility/privacy */
    listPrivacy: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/privacy`, undefined, opts),
    /** T1 GET /:guildId/compatibility/opt-outs */
    listOptOuts: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/opt-outs`, undefined, opts),
    /** T1 PUT /:guildId/compatibility/opt-outs/:userId */
    setOptOuts: (userId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/compatibility/opt-outs/${encodeURIComponent(userId)}`, body, opts),
    /** T1 PATCH /:guildId/compatibility/alerts/:alertId */
    updateAlerts: (alertId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/compatibility/alerts/${encodeURIComponent(alertId)}`, body, opts),
    /** T1 DELETE /:guildId/compatibility/opt-outs/:userId */
    deleteOptOuts: (userId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/compatibility/opt-outs/${encodeURIComponent(userId)}`, undefined, opts),
  } as const;
}
