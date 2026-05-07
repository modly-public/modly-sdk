// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachReputation(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/reputation */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/reputation`, undefined, opts),
    /** T1 GET /:guildId/reputation/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/reputation/export`, undefined, opts),
    /** T2 POST /:guildId/reputation/import */
    // TODO: migrate reputation.ts to defineRoute() for typed body
    import: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/reputation/import`, body, opts),
    /** T1 POST /:guildId/reputation/adjust */
    adjust: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/reputation/adjust`, body, opts),
    /** T1 POST /:guildId/reputation/role-rewards */
    roleRewards: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/reputation/role-rewards`, body, opts),
    /** T1 POST /:guildId/reputation/reward-actions */
    rewardActions: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/reputation/reward-actions`, body, opts),
    /** T1 DELETE /:guildId/reputation/rewards/:rewardId */
    deleteRewards: (rewardId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/reputation/rewards/${encodeURIComponent(rewardId)}`, undefined, opts),
    /** T2 POST /:guildId/reputation/rewards/sync */
    // TODO: migrate reputation.ts to defineRoute() for typed body
    rewardsSync: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/reputation/rewards/sync`, body, opts),
    /** T2 POST /:guildId/reputation/reviews/:reviewId/:action */
    // TODO: migrate reputation.ts to defineRoute() for typed body
    reviews: (reviewId: string, action: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/reputation/reviews/${encodeURIComponent(reviewId)}/${encodeURIComponent(action)}`, body, opts),
    /** T1 POST /:guildId/reputation/seasons */
    seasons: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/reputation/seasons`, body, opts),
    /** T2 POST /:guildId/reputation/decay/run */
    // TODO: migrate reputation.ts to defineRoute() for typed body
    decayRun: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/reputation/decay/run`, body, opts),
  } as const;
}
