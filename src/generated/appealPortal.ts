// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAppealPortal(client: ModlyClient) {
  return {
    /** T1 GET /:token */
    get: (token: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(token)}`, undefined, opts),
    /** T1 POST /:token */
    create: (token: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(token)}`, body, opts),
  } as const;
}
