// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachEmbeds(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/embeds */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/embeds`, undefined, opts),
    /** T1 PUT /:guildId/embeds */
    put: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/embeds`, body, opts),
    /** T1 POST /:guildId/embeds/:name/duplicate */
    duplicate: (name: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/embeds/${encodeURIComponent(name)}/duplicate`, body, opts),
    /** T1 DELETE /:guildId/embeds/:name */
    deleteName: (name: string, opts?: RequestOptions) =>
      client._request("DELETE", `/embeds/${encodeURIComponent(name)}`, undefined, opts),
    /** T1 GET /:guildId/embeds/:name/versions */
    listVersions: (name: string, opts?: RequestOptions) =>
      client._request("GET", `/embeds/${encodeURIComponent(name)}/versions`, undefined, opts),
    /** T1 POST /:guildId/embeds/:name/versions/:version/restore */
    versionsRestore: (name: string, version: string, opts?: RequestOptions) =>
      client._request("POST", `/embeds/${encodeURIComponent(name)}/versions/${encodeURIComponent(version)}/restore`, undefined, opts),
    /** T1 POST /:guildId/embeds/:name/send */
    send: (name: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/embeds/${encodeURIComponent(name)}/send`, body, opts),
    /** T1 PUT /:guildId/embeds/assets */
    setAssets: (opts?: RequestOptions) =>
      client._request("PUT", `/embeds/assets`, undefined, opts),
  } as const;
}
