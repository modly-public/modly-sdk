// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMcp(client: ModlyClient) {
  return {
    /** T1 POST / */
    // intentional unknown body — pass-through (MCP / dispatcher / arbitrary test payload)
    create: (body: unknown, opts?: RequestOptions) =>
      client._request("POST", `/`, body, opts),
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
  } as const;
}
