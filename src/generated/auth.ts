// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAuth(client: ModlyClient) {
  return {
    /** T1 GET /login */
    listLogin: (opts?: RequestOptions) =>
      client._request("GET", `/login`, undefined, opts),
    /** T1 GET /callback */
    listCallback: (opts?: RequestOptions) =>
      client._request("GET", `/callback`, undefined, opts),
    /** T1 POST /callback */
    callback: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/callback`, body, opts),
    /** T1 POST /logout */
    logout: (opts?: RequestOptions) =>
      client._request("POST", `/logout`, undefined, opts),
  } as const;
}
