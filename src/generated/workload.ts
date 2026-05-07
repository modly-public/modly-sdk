// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachWorkload(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/workload */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/workload`, undefined, opts),
  } as const;
}
