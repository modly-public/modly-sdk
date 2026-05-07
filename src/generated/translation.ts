// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachTranslation(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/translation */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/translation`, undefined, opts),
    /** T1 POST /:guildId/translation/test */
    test: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/translation/test`, body, opts),
    /** T1 PATCH /:guildId/translation */
    patch: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/translation`, body, opts),
    /** T1 POST /:guildId/translation/credentials/:provider */
    credentials: (provider: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/translation/credentials/${encodeURIComponent(provider)}`, body, opts),
    /** T1 DELETE /:guildId/translation/credentials/:provider */
    deleteCredentials: (provider: string, opts?: RequestOptions) =>
      client._request("DELETE", `/translation/credentials/${encodeURIComponent(provider)}`, undefined, opts),
  } as const;
}
