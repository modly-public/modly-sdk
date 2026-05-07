// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachPublic(client: ModlyClient) {
  return {
    /** T1 GET /tools */
    listTools: (opts?: RequestOptions) =>
      client._request("GET", `/tools`, undefined, opts),
    /** T1 POST /tools/:name */
    // intentional unknown body — pass-through (MCP / dispatcher / arbitrary test payload)
    tools: (name: string, body: unknown, opts?: RequestOptions) =>
      client._request("POST", `/tools/${encodeURIComponent(name)}`, body, opts),
  } as const;
}
