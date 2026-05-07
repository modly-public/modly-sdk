// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachRoles(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/roles */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/roles`, undefined, opts),
  } as const;
}
