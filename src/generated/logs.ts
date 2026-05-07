// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachLogs(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/logs */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/logs`, undefined, opts),
    /** T1 GET /:guildId/logs/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/logs/export`, undefined, opts),
  } as const;
}
