// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCustomCommands(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/custom-commands */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/custom-commands`, undefined, opts),
    /** T1 POST /:guildId/custom-commands/commands */
    commands: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/custom-commands/commands`, body, opts),
    /** T1 POST /:guildId/custom-commands/preview */
    preview: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/custom-commands/preview`, body, opts),
    /** T1 DELETE /:guildId/custom-commands/commands/:id */
    deleteCommands: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/custom-commands/commands/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 GET /:guildId/custom-commands/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/custom-commands/export`, undefined, opts),
    /** T1 POST /:guildId/custom-commands/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/custom-commands/import`, body, opts),
    /** T1 GET /:guildId/custom-commands/commands/:id */
    getId: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/custom-commands/commands/${encodeURIComponent(id)}`, undefined, opts),
  } as const;
}
