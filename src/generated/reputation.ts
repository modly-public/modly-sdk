// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachReputation(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/reputation */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/reputation`, undefined, opts),
    /** T1 GET /:guildId/reputation/users/:targetUserId */
    getTargetUser: (targetUserId: string, opts?: RequestOptions) =>
      client._request("GET", `/reputation/users/${encodeURIComponent(targetUserId)}`, undefined, opts),
    /** T1 GET /:guildId/reputation/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/reputation/export`, undefined, opts),
    /** T1 POST /:guildId/reputation/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
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
    /** T1 POST /:guildId/reputation/rewards/sync */
    rewardsSync: (opts?: RequestOptions) =>
      client._request("POST", `/reputation/rewards/sync`, undefined, opts),
    /** T1 POST /:guildId/reputation/reviews/:reviewId/:action */
    reviews: (reviewId: string, action: string, opts?: RequestOptions) =>
      client._request("POST", `/reputation/reviews/${encodeURIComponent(reviewId)}/${encodeURIComponent(action)}`, undefined, opts),
    /** T1 POST /:guildId/reputation/seasons */
    seasons: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/reputation/seasons`, body, opts),
    /** T1 POST /:guildId/reputation/decay/run */
    decayRun: (opts?: RequestOptions) =>
      client._request("POST", `/reputation/decay/run`, undefined, opts),
    /** T1 GET /:guildId/reputation/top */
    listTop: (opts?: RequestOptions) =>
      client._request("GET", `/reputation/top`, undefined, opts),
  } as const;
}
