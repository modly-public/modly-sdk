// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachInviteTracker(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/invite-tracker */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/invite-tracker`, undefined, opts),
    /** T1 GET /:guildId/invite-tracker/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/invite-tracker/export`, undefined, opts),
    /** T1 POST /:guildId/invite-tracker/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/import`, body, opts),
    /** T1 POST /:guildId/invite-tracker/bonuses */
    bonuses: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/bonuses`, body, opts),
    /** T1 POST /:guildId/invite-tracker/rewards */
    rewards: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/rewards`, body, opts),
    /** T1 DELETE /:guildId/invite-tracker/rewards/:roleId */
    deleteRewards: (roleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/invite-tracker/rewards/${encodeURIComponent(roleId)}`, undefined, opts),
    /** T1 POST /:guildId/invite-tracker/rewards/sync */
    rewardsSync: (opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/rewards/sync`, undefined, opts),
    /** T1 PATCH /:guildId/invite-tracker/labels/:code */
    updateLabels: (code: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/invite-tracker/labels/${encodeURIComponent(code)}`, body, opts),
    /** T1 POST /:guildId/invite-tracker/leaderboards */
    leaderboards: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/leaderboards`, body, opts),
    /** T1 PATCH /:guildId/invite-tracker/leaderboards/:leaderboardId */
    updateLeaderboards: (leaderboardId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/invite-tracker/leaderboards/${encodeURIComponent(leaderboardId)}`, body, opts),
    /** T1 DELETE /:guildId/invite-tracker/leaderboards/:leaderboardId */
    deleteLeaderboards: (leaderboardId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/invite-tracker/leaderboards/${encodeURIComponent(leaderboardId)}`, undefined, opts),
    /** T1 POST /:guildId/invite-tracker/blocklist */
    blocklist: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/invite-tracker/blocklist`, body, opts),
    /** T1 DELETE /:guildId/invite-tracker/blocklist/:blockId */
    deleteBlocklist: (blockId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/invite-tracker/blocklist/${encodeURIComponent(blockId)}`, undefined, opts),
    /** T1 PATCH /:guildId/invite-tracker/attributions/:attributionId */
    updateAttributions: (attributionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/invite-tracker/attributions/${encodeURIComponent(attributionId)}`, body, opts),
  } as const;
}
