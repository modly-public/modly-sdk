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
    /** T2 POST /:guildId/ama/session/:sessionId/close */
    // TODO: migrate ama.ts to defineRoute() for typed body
    sessionClose: (sessionId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/close`, body, opts),
    /** T2 POST /:guildId/ama/session/:sessionId/questions/:questionId/approve */
    // TODO: migrate ama.ts to defineRoute() for typed body
    sessionQuestionsApprove: (sessionId: string, questionId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/approve`, body, opts),
    /** T2 POST /:guildId/ama/session/:sessionId/questions/:questionId/reject */
    // TODO: migrate ama.ts to defineRoute() for typed body
    sessionQuestionsReject: (sessionId: string, questionId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/reject`, body, opts),
    /** T2 POST /:guildId/ama/session/:sessionId/questions/:questionId/vote */
    // TODO: migrate ama.ts to defineRoute() for typed body
    sessionQuestionsVote: (sessionId: string, questionId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/vote`, body, opts),
    /** T1 POST /:guildId/ama/session/:sessionId/questions/:questionId/answer */
    sessionQuestionsAnswer: (sessionId: string, questionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ama/session/${encodeURIComponent(sessionId)}/questions/${encodeURIComponent(questionId)}/answer`, body, opts),
  } as const;
}
