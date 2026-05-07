// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachStats(client: ModlyClient) {
  return {
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
  } as const;
}
