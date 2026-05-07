// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachConfessions(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/confessions */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/confessions`, undefined, opts),
    /** T1 POST /:guildId/confessions/:id/decide */
    decide: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/confessions/${encodeURIComponent(id)}/decide`, body, opts),
    /** T1 GET /:guildId/confessions/audit */
    listAudit: (opts?: RequestOptions) =>
      client._request("GET", `/confessions/audit`, undefined, opts),
  } as const;
}
