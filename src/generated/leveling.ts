// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachLeveling(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/leveling */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/leveling`, undefined, opts),
    /** T1 GET /:guildId/leveling/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/leveling/export`, undefined, opts),
    /** T1 POST /:guildId/leveling/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/import`, body, opts),
    /** T1 POST /:guildId/leveling/rewards */
    rewards: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/rewards`, body, opts),
    /** T1 POST /:guildId/leveling/reward-actions */
    rewardActions: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/reward-actions`, body, opts),
    /** T1 DELETE /:guildId/leveling/rewards/:rewardId */
    deleteRewards: (rewardId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/leveling/rewards/${encodeURIComponent(rewardId)}`, undefined, opts),
    /** T1 POST /:guildId/leveling/users/xp */
    usersXp: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/users/xp`, body, opts),
    /** T1 DELETE /:guildId/leveling/users/:targetUserId */
    deleteUsers: (targetUserId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/leveling/users/${encodeURIComponent(targetUserId)}`, undefined, opts),
    /** T1 POST /:guildId/leveling/rewards/sync */
    rewardsSync: (opts?: RequestOptions) =>
      client._request("POST", `/leveling/rewards/sync`, undefined, opts),
    /** T1 PUT /:guildId/leveling/card/background */
    setCardBackground: (opts?: RequestOptions) =>
      client._request("PUT", `/leveling/card/background`, undefined, opts),
    /** T1 GET /:guildId/leveling/top */
    listTop: (opts?: RequestOptions) =>
      client._request("GET", `/leveling/top`, undefined, opts),
    /** T1 POST /:guildId/leveling/xp/give */
    xpGive: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/xp/give`, body, opts),
    /** T1 POST /:guildId/leveling/xp/take */
    xpTake: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/leveling/xp/take`, body, opts),
  } as const;
}
