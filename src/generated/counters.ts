// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCounters(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/counters */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/counters`, undefined, opts),
    /** T1 POST /:guildId/counters */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/counters`, body, opts),
    /** T1 PATCH /:guildId/counters/:counterId */
    update: (counterId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/counters/${encodeURIComponent(counterId)}`, body, opts),
    /** T1 DELETE /:guildId/counters/:counterId */
    delete: (counterId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/counters/${encodeURIComponent(counterId)}`, undefined, opts),
    /** T1 POST /:guildId/counters/:counterId/publish */
    publish: (counterId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/counters/${encodeURIComponent(counterId)}/publish`, body, opts),
    /** T1 POST /:guildId/counters/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/counters/import`, body, opts),
  } as const;
}
