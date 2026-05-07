// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCompatibility(client: ModlyClient) {
  return {
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
    /** T2 POST /:guildId/compatibility/views */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    views: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/compatibility/views`, body, opts),
    /** T2 PATCH /:guildId/compatibility/views/:viewId */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    updateViews: (viewId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("PATCH", `/compatibility/views/${encodeURIComponent(viewId)}`, body, opts),
    /** T2 POST /:guildId/compatibility/views/:viewId/clone */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    viewsClone: (viewId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/compatibility/views/${encodeURIComponent(viewId)}/clone`, body, opts),
    /** T1 DELETE /:guildId/compatibility/views/:viewId */
    deleteViews: (viewId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/compatibility/views/${encodeURIComponent(viewId)}`, undefined, opts),
    /** T1 GET /:guildId/compatibility/snapshots */
    listSnapshots: (opts?: RequestOptions) =>
      client._request("GET", `/compatibility/snapshots`, undefined, opts),
    /** T2 POST /:guildId/compatibility/snapshots */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    snapshots: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/compatibility/snapshots`, body, opts),
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
    /** T2 PUT /:guildId/compatibility/opt-outs/:userId */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    setOptOuts: (userId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/compatibility/opt-outs/${encodeURIComponent(userId)}`, body, opts),
    /** T2 PATCH /:guildId/compatibility/alerts/:alertId */
    // TODO: migrate compatibility.ts to defineRoute() for typed body
    updateAlerts: (alertId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("PATCH", `/compatibility/alerts/${encodeURIComponent(alertId)}`, body, opts),
    /** T1 DELETE /:guildId/compatibility/opt-outs/:userId */
    deleteOptOuts: (userId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/compatibility/opt-outs/${encodeURIComponent(userId)}`, undefined, opts),
  } as const;
}
