// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSafety(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/safety/evader-detections */
    listEvaderDetections: (opts?: RequestOptions) =>
      client._request("GET", `/safety/evader-detections`, undefined, opts),
    /** T1 POST /:guildId/safety/evader-detections/:id/resolve */
    evaderDetectionsResolve: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/evader-detections/${encodeURIComponent(id)}/resolve`, body, opts),
    /** T1 GET /:guildId/safety/flags */
    listFlags: (opts?: RequestOptions) =>
      client._request("GET", `/safety/flags`, undefined, opts),
    /** T1 POST /:guildId/safety/flags/:id/resolve */
    flagsResolve: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/flags/${encodeURIComponent(id)}/resolve`, body, opts),
    /** T1 GET /:guildId/safety/name-rules */
    listNameRules: (opts?: RequestOptions) =>
      client._request("GET", `/safety/name-rules`, undefined, opts),
    /** T1 POST /:guildId/safety/name-rules */
    nameRules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/name-rules`, body, opts),
    /** T1 DELETE /:guildId/safety/name-rules/:id */
    deleteNameRules: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/safety/name-rules/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 GET /:guildId/safety/pfp-hashes */
    listPfpHashes: (opts?: RequestOptions) =>
      client._request("GET", `/safety/pfp-hashes`, undefined, opts),
    /** T1 GET /:guildId/safety/state */
    listState: (opts?: RequestOptions) =>
      client._request("GET", `/safety/state`, undefined, opts),
    /** T1 POST /:guildId/safety/dm-toggle */
    dmToggle: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/dm-toggle`, body, opts),
    /** T1 POST /:guildId/safety/invite-toggle */
    inviteToggle: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/invite-toggle`, body, opts),
    /** T1 GET /:guildId/safety/trends */
    listTrends: (opts?: RequestOptions) =>
      client._request("GET", `/safety/trends`, undefined, opts),
    /** T1 POST /:guildId/safety/pfp-hashes */
    pfpHashes: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/safety/pfp-hashes`, body, opts),
    /** T1 GET /:guildId/safety/scam-phrases */
    listScamPhrases: (opts?: RequestOptions) =>
      client._request("GET", `/safety/scam-phrases`, undefined, opts),
    /** T1 PUT /:guildId/safety/scam-phrases */
    setScamPhrases: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/safety/scam-phrases`, body, opts),
  } as const;
}
