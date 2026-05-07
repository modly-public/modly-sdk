// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAppeals(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/appeals */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/appeals`, undefined, opts),
    /** T1 POST /:guildId/appeals/:appealId/decide */
    decide: (appealId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/appeals/${encodeURIComponent(appealId)}/decide`, body, opts),
  } as const;
}
