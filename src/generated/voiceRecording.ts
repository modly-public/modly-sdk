// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachVoiceRecording(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/voice-recording */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/voice-recording`, undefined, opts),
    /** T1 PATCH /:guildId/voice-recording/sessions/:sessionId */
    updateSessions: (sessionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/voice-recording/sessions/${encodeURIComponent(sessionId)}`, body, opts),
    /** T1 GET /:guildId/voice-recording/sessions/:sessionId/export */
    listExport: (sessionId: string, opts?: RequestOptions) =>
      client._request("GET", `/voice-recording/sessions/${encodeURIComponent(sessionId)}/export`, undefined, opts),
    /** T1 DELETE /:guildId/voice-recording/sessions/:sessionId */
    deleteSessions: (sessionId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/voice-recording/sessions/${encodeURIComponent(sessionId)}`, undefined, opts),
  } as const;
}
