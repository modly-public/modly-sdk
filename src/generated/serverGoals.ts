// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachServerGoals(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/server-goals */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/server-goals`, undefined, opts),
    /** T1 POST /:guildId/server-goals/goals */
    goals: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-goals/goals`, body, opts),
    /** T1 POST /:guildId/server-goals/goals/:goalId/manual */
    goalsManual: (goalId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-goals/goals/${encodeURIComponent(goalId)}/manual`, body, opts),
    /** T1 DELETE /:guildId/server-goals/goals/:goalId */
    deleteGoals: (goalId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/server-goals/goals/${encodeURIComponent(goalId)}`, undefined, opts),
    /** T1 GET /:guildId/server-goals/events */
    listEvents: (opts?: RequestOptions) =>
      client._request("GET", `/server-goals/events`, undefined, opts),
  } as const;
}
