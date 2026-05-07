// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachModules(client: ModlyClient) {
  return {
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
    /** T1 GET /:key/schema */
    listSchema: (key: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(key)}/schema`, undefined, opts),
  } as const;
}
