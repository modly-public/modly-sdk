// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSavedResponses(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/saved-responses */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/saved-responses`, undefined, opts),
    /** T2 PUT /:guildId/saved-responses/assets */
    // TODO: migrate saved-responses.ts to defineRoute() for typed body
    setAssets: (body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/saved-responses/assets`, body, opts),
    /** T1 POST /:guildId/saved-responses/responses */
    responses: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/saved-responses/responses`, body, opts),
    /** T1 DELETE /:guildId/saved-responses/responses/:id */
    deleteResponses: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/saved-responses/responses/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 GET /:guildId/saved-responses/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/saved-responses/export`, undefined, opts),
    /** T1 POST /:guildId/saved-responses/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/saved-responses/import`, body, opts),
  } as const;
}
