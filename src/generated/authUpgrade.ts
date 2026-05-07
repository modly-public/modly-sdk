// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAuthUpgrade(client: ModlyClient) {
  return {
    /** T1 GET /upgrade/:tier/start */
    listStart: (tier: string, opts?: RequestOptions) =>
      client._request("GET", `/upgrade/${encodeURIComponent(tier)}/start`, undefined, opts),
    /** T1 GET /upgrade/:tier/callback */
    listCallback: (tier: string, opts?: RequestOptions) =>
      client._request("GET", `/upgrade/${encodeURIComponent(tier)}/callback`, undefined, opts),
  } as const;
}
