// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMcp(client: ModlyClient) {
  return {
    /** T2 POST / */
    // TODO: migrate mcp.ts to defineRoute() for typed body
    create: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/`, body, opts),
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
  } as const;
}
