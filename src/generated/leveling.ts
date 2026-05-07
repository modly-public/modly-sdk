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
    /** T2 POST /:guildId/leveling/import */
    // TODO: migrate leveling.ts to defineRoute() for typed body
    import: (body?: unknown, opts?: RequestOptions) =>
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
    /** T2 POST /:guildId/leveling/rewards/sync */
    // TODO: migrate leveling.ts to defineRoute() for typed body
    rewardsSync: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/leveling/rewards/sync`, body, opts),
    /** T2 PUT /:guildId/leveling/card/background */
    // TODO: migrate leveling.ts to defineRoute() for typed body
    setCardBackground: (body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/leveling/card/background`, body, opts),
  } as const;
}
