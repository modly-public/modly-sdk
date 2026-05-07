// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachGames(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/games */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/games`, undefined, opts),
    /** T1 GET /:guildId/games/leaderboard */
    listLeaderboard: (opts?: RequestOptions) =>
      client._request("GET", `/games/leaderboard`, undefined, opts),
    /** T1 GET /:guildId/games/recent */
    listRecent: (opts?: RequestOptions) =>
      client._request("GET", `/games/recent`, undefined, opts),
  } as const;
}
