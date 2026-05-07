// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSecrets(client: ModlyClient) {
  return {
    /** T1 GET /:guildId */
    get: (opts?: RequestOptions) =>
      client._request("GET", ``, undefined, opts),
    /** T1 POST /:guildId */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", ``, body, opts),
    /** T1 DELETE /:guildId/:key */
    deleteKey: (key: string, opts?: RequestOptions) =>
      client._request("DELETE", `/${encodeURIComponent(key)}`, undefined, opts),
  } as const;
}
