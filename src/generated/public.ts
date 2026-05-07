// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachPublic(client: ModlyClient) {
  return {
    /** T1 GET /tools */
    listTools: (opts?: RequestOptions) =>
      client._request("GET", `/tools`, undefined, opts),
    /** T2 POST /tools/:name */
    // TODO: migrate public.ts to defineRoute() for typed body
    tools: (name: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/tools/${encodeURIComponent(name)}`, body, opts),
  } as const;
}
