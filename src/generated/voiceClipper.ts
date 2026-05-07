// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachVoiceClipper(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/voice-clipper */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/voice-clipper`, undefined, opts),
    /** T1 PATCH /:guildId/voice-clipper/clips/:clipId */
    updateClips: (clipId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/voice-clipper/clips/${encodeURIComponent(clipId)}`, body, opts),
    /** T1 GET /:guildId/voice-clipper/clips/:clipId/export */
    listExport: (clipId: string, opts?: RequestOptions) =>
      client._request("GET", `/voice-clipper/clips/${encodeURIComponent(clipId)}/export`, undefined, opts),
    /** T1 DELETE /:guildId/voice-clipper/clips/:clipId */
    deleteClips: (clipId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/voice-clipper/clips/${encodeURIComponent(clipId)}`, undefined, opts),
  } as const;
}
