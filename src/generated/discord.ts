// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachDiscord(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/discord/channels */
    listChannels: (opts?: RequestOptions) =>
      client._request("GET", `/discord/channels`, undefined, opts),
    /** T1 GET /:guildId/discord/roles */
    listRoles: (opts?: RequestOptions) =>
      client._request("GET", `/discord/roles`, undefined, opts),
    /** T1 GET /:guildId/discord/members */
    listMembers: (opts?: RequestOptions) =>
      client._request("GET", `/discord/members`, undefined, opts),
  } as const;
}
