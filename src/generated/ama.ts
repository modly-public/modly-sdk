// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAma(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/ama */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/ama`, undefined, opts),
    /** T1 POST /:guildId/ama/session */
    session: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ama/session`, body, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/close */
    sessionClose: (sessionId: string, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/close`, undefined, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/questions/:questionId/approve */
    sessionQuestionsApprove: (sessionId: string, questionId: string, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/approve`, undefined, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/questions/:questionId/reject */
    sessionQuestionsReject: (sessionId: string, questionId: string, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/reject`, undefined, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/questions/:questionId/vote */
    sessionQuestionsVote: (sessionId: string, questionId: string, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/vote`, undefined, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/questions/:questionId/answer */
    sessionQuestionsAnswer: (sessionId: string, questionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/answer`, body, opts),
  } as const;
}
