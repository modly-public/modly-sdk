// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachWelcome(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/welcome-card/preview */
    listPreview: (opts?: RequestOptions) =>
      client._request("GET", `/welcome-card/preview`, undefined, opts),
    /** T1 GET /:guildId/welcome-card/:kind/preview */
    listPreview_get1: (kind: string, opts?: RequestOptions) =>
      client._request("GET", `/welcome-card/${encodeURIComponent(kind)}/preview`, undefined, opts),
    /** T2 PUT /:guildId/welcome-card/background */
    // TODO: migrate welcome.ts to defineRoute() for typed body
    setWelcomeCardBackground: (body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/welcome-card/background`, body, opts),
    /** T2 PUT /:guildId/welcome-card/:kind/background */
    // TODO: migrate welcome.ts to defineRoute() for typed body
    setWelcomeCardBackground_put1: (kind: string, body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/welcome-card/${encodeURIComponent(kind)}/background`, body, opts),
    /** T1 DELETE /:guildId/welcome-card/background */
    deleteWelcomeCardBackground: (opts?: RequestOptions) =>
      client._request("DELETE", `/welcome-card/background`, undefined, opts),
    /** T1 DELETE /:guildId/welcome-card/:kind/background */
    deleteWelcomeCardBackground_delete1: (kind: string, opts?: RequestOptions) =>
      client._request("DELETE", `/welcome-card/${encodeURIComponent(kind)}/background`, undefined, opts),
    /** T1 GET /:guildId/rank-card/preview */
    listPreview_get2: (opts?: RequestOptions) =>
      client._request("GET", `/rank-card/preview`, undefined, opts),
  } as const;
}
