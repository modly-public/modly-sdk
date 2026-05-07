// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachIncidents(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/raid/incidents */
    listIncidents: (opts?: RequestOptions) =>
      client._request("GET", `/raid/incidents`, undefined, opts),
    /** T2 POST /:guildId/raid/incidents/:id/rollback */
    // TODO: migrate incidents.ts to defineRoute() for typed body
    raidIncidentsRollback: (id: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/raid/incidents/${encodeURIComponent(id)}/rollback`, body, opts),
    /** T1 GET /:guildId/antinuke/incidents */
    listIncidents_get1: (opts?: RequestOptions) =>
      client._request("GET", `/antinuke/incidents`, undefined, opts),
  } as const;
}
