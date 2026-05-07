// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachModCoach(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/mod-coach/runs */
    listRuns: (opts?: RequestOptions) =>
      client._request("GET", `/mod-coach/runs`, undefined, opts),
    /** T1 POST /:guildId/mod-coach/run */
    run: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/mod-coach/run`, body, opts),
    /** T1 GET /:guildId/mod-coach/runs/:runId/export */
    listExport: (runId: string, opts?: RequestOptions) =>
      client._request("GET", `/mod-coach/runs/${encodeURIComponent(runId)}/export`, undefined, opts),
    /** T2 POST /:guildId/mod-coach/runs/:runId/recommendations/:recommendationId/dismiss */
    // TODO: migrate mod-coach.ts to defineRoute() for typed body
    runsRecommendationsDismiss: (runId: string, recommendationId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/mod-coach/runs/${encodeURIComponent(runId)}/recommendations/${encodeURIComponent(recommendationId)}/dismiss`, body, opts),
    /** T1 POST /:guildId/mod-coach/runs/:runId/recommendations/:recommendationId/snooze */
    runsRecommendationsSnooze: (runId: string, recommendationId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/mod-coach/runs/${encodeURIComponent(runId)}/recommendations/${encodeURIComponent(recommendationId)}/snooze`, body, opts),
    /** T1 POST /:guildId/mod-coach/runs/:runId/ask */
    runsAsk: (runId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/mod-coach/runs/${encodeURIComponent(runId)}/ask`, body, opts),
    /** T1 GET /:guildId/mod-coach/runs/:runId/recommendations/:recommendationId/preview */
    listPreview: (runId: string, recommendationId: string, opts?: RequestOptions) =>
      client._request("GET", `/mod-coach/runs/${encodeURIComponent(runId)}/recommendations/${encodeURIComponent(recommendationId)}/preview`, undefined, opts),
    /** T2 POST /:guildId/mod-coach/runs/:runId/recommendations/:recommendationId/apply */
    // TODO: migrate mod-coach.ts to defineRoute() for typed body
    runsRecommendationsApply: (runId: string, recommendationId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/mod-coach/runs/${encodeURIComponent(runId)}/recommendations/${encodeURIComponent(recommendationId)}/apply`, body, opts),
  } as const;
}
