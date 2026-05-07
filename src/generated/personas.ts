// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachPersonas(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/personas */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/personas`, undefined, opts),
    /** T1 POST /:guildId/personas/presets */
    presets: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/personas/presets`, body, opts),
    /** T1 PATCH /:guildId/personas/presets/:id */
    updatePresets: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/personas/presets/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/personas/presets/:id */
    deletePresets: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/personas/presets/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/personas/own */
    own: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/personas/own`, body, opts),
    /** T1 PATCH /:guildId/personas/own/:id */
    updateOwn: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/personas/own/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/personas/own/:id */
    deleteOwn: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/personas/own/${encodeURIComponent(id)}`, undefined, opts),
  } as const;
}
