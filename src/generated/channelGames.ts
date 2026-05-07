// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachChannelGames(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/channel-games */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/channel-games`, undefined, opts),
    /** T1 POST /:guildId/channel-games */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/channel-games`, body, opts),
    /** T1 PATCH /:guildId/channel-games/:ruleId */
    update: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/channel-games/${encodeURIComponent(ruleId)}`, body, opts),
    /** T1 POST /:guildId/channel-games/:ruleId/reset */
    reset: (ruleId: string, opts?: RequestOptions) =>
      client._request("POST", `/channel-games/${encodeURIComponent(ruleId)}/reset`, undefined, opts),
    /** T1 POST /:guildId/channel-games/:ruleId/prompt */
    prompt: (ruleId: string, opts?: RequestOptions) =>
      client._request("POST", `/channel-games/${encodeURIComponent(ruleId)}/prompt`, undefined, opts),
    /** T1 GET /:guildId/channel-games/:ruleId/question-bank.csv */
    listQuestionBankCsv: (ruleId: string, opts?: RequestOptions) =>
      client._request("GET", `/channel-games/${encodeURIComponent(ruleId)}/question-bank.csv`, undefined, opts),
    /** T1 POST /:guildId/channel-games/:ruleId/question-bank */
    questionBank: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/channel-games/${encodeURIComponent(ruleId)}/question-bank`, body, opts),
    /** T1 POST /:guildId/channel-games/:ruleId/leaderboard/publish */
    leaderboardPublish: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/channel-games/${encodeURIComponent(ruleId)}/leaderboard/publish`, body, opts),
    /** T1 GET /:guildId/channel-games/leaderboard */
    listLeaderboard: (opts?: RequestOptions) =>
      client._request("GET", `/channel-games/leaderboard`, undefined, opts),
    /** T1 DELETE /:guildId/channel-games/:ruleId */
    delete: (ruleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/channel-games/${encodeURIComponent(ruleId)}`, undefined, opts),
  } as const;
}
