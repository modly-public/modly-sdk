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
    /** T1 PUT /:guildId/welcome-card/background */
    setWelcomeCardBackground: (opts?: RequestOptions) =>
      client._request("PUT", `/welcome-card/background`, undefined, opts),
    /** T1 PUT /:guildId/welcome-card/:kind/background */
    setWelcomeCardBackground_put1: (kind: string, opts?: RequestOptions) =>
      client._request("PUT", `/welcome-card/${encodeURIComponent(kind)}/background`, undefined, opts),
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
