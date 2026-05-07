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
    delete: (name: string, opts?: RequestOptions) =>
      client._request("DELETE", `/embeds/${encodeURIComponent(name)}`, undefined, opts),
    /** T1 GET /:guildId/embeds/:name/versions */
    listVersions: (name: string, opts?: RequestOptions) =>
      client._request("GET", `/embeds/${encodeURIComponent(name)}/versions`, undefined, opts),
    /** T2 POST /:guildId/embeds/:name/versions/:version/restore */
    // TODO: migrate embeds.ts to defineRoute() for typed body
    versionsRestore: (name: string, version: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/embeds/${encodeURIComponent(name)}/versions/${encodeURIComponent(version)}/restore`, body, opts),
    /** T1 POST /:guildId/embeds/:name/send */
    send: (name: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/embeds/${encodeURIComponent(name)}/send`, body, opts),
    /** T2 PUT /:guildId/embeds/assets */
    // TODO: migrate embeds.ts to defineRoute() for typed body
    setAssets: (body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/embeds/assets`, body, opts),
  } as const;
}
