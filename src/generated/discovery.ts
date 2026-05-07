// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachDiscovery(client: ModlyClient) {
  return {
    /** T1 GET / */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/`, undefined, opts),
    /** T1 GET /:slug */
    get_get1: (slug: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(slug)}`, undefined, opts),
    /** T1 POST /discovery/:slug/vote */
    vote: (slug: string, opts?: RequestOptions) =>
      client._request("POST", `/discovery/${encodeURIComponent(slug)}/vote`, undefined, opts),
    /** T1 POST /guilds/:guildId/discovery */
    guildsDiscovery: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/guilds/:guildId/discovery`, body, opts),
    /** T1 PATCH /guilds/:guildId/discovery */
    updateGuildsDiscovery: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/guilds/:guildId/discovery`, body, opts),
    /** T1 PUT /guilds/:guildId/discovery/banner */
    setGuildsDiscoveryBanner: (opts?: RequestOptions) =>
      client._request("PUT", `/guilds/:guildId/discovery/banner`, undefined, opts),
    /** T1 DELETE /guilds/:guildId/discovery */
    deleteGuildsDiscovery: (opts?: RequestOptions) =>
      client._request("DELETE", `/guilds/:guildId/discovery`, undefined, opts),
    /** T1 GET /guilds/:guildId/discovery */
    listDiscovery: (opts?: RequestOptions) =>
      client._request("GET", `/guilds/:guildId/discovery`, undefined, opts),
  } as const;
}
