// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMeTokens(client: ModlyClient) {
  return {
    /** T1 GET /tokens */
    listTokens: (opts?: RequestOptions) =>
      client._request("GET", `/tokens`, undefined, opts),
    /** T1 POST /tokens */
    tokens: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/tokens`, body, opts),
    /** T1 DELETE /tokens/:id */
    deleteTokens: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/tokens/${encodeURIComponent(id)}`, undefined, opts),
  } as const;
}
