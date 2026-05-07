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
  } as const;
}
