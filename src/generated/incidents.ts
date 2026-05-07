// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachIncidents(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/raid/incidents */
    listIncidents: (opts?: RequestOptions) =>
      client._request("GET", `/raid/incidents`, undefined, opts),
    /** T1 POST /:guildId/raid/incidents/:id/rollback */
    raidIncidentsRollback: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/raid/incidents/${encodeURIComponent(id)}/rollback`, undefined, opts),
    /** T1 GET /:guildId/antinuke/incidents */
    listIncidents_get1: (opts?: RequestOptions) =>
      client._request("GET", `/antinuke/incidents`, undefined, opts),
    /** T1 POST /:guildId/antinuke/incidents/:id/resolve */
    antinukeIncidentsResolve: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/antinuke/incidents/${encodeURIComponent(id)}/resolve`, body, opts),
    /** T1 GET /:guildId/antinuke/trust */
    listTrust: (opts?: RequestOptions) =>
      client._request("GET", `/antinuke/trust`, undefined, opts),
    /** T1 POST /:guildId/antinuke/trust */
    antinukeTrust: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/antinuke/trust`, body, opts),
    /** T1 DELETE /:guildId/antinuke/trust/:userId */
    deleteAntinukeTrust: (userId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/antinuke/trust/${encodeURIComponent(userId)}`, undefined, opts),
    /** T1 GET /:guildId/antinuke/federation */
    listFederation: (opts?: RequestOptions) =>
      client._request("GET", `/antinuke/federation`, undefined, opts),
    /** T1 POST /:guildId/antinuke/federation/block */
    antinukeFederationBlock: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/antinuke/federation/block`, body, opts),
    /** T1 DELETE /:guildId/antinuke/federation/block/:userId */
    deleteAntinukeFederationBlock: (userId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/antinuke/federation/block/${encodeURIComponent(userId)}`, undefined, opts),
    /** T1 POST /:guildId/raid/mode */
    raidMode: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/raid/mode`, body, opts),
  } as const;
}
