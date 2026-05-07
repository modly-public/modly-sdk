// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCases(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/cases */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/cases`, undefined, opts),
    /** T1 GET /:guildId/cases/:number */
    getNumber: (number: string, opts?: RequestOptions) =>
      client._request("GET", `/cases/${encodeURIComponent(number)}`, undefined, opts),
    /** T1 PATCH /:guildId/cases/:number */
    update: (number: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/cases/${encodeURIComponent(number)}`, body, opts),
  } as const;
}
