// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachTts(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/tts/transcripts */
    listTranscripts: (opts?: RequestOptions) =>
      client._request("GET", `/tts/transcripts`, undefined, opts),
    /** T1 GET /:guildId/tts/transcripts/:sessionId */
    getSession: (sessionId: string, opts?: RequestOptions) =>
      client._request("GET", `/tts/transcripts/${encodeURIComponent(sessionId)}`, undefined, opts),
    /** T1 DELETE /:guildId/tts/transcripts/:sessionId */
    deleteTranscripts: (sessionId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/tts/transcripts/${encodeURIComponent(sessionId)}`, undefined, opts),
  } as const;
}
