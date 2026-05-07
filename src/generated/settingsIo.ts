// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSettingsIo(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/settings/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/settings/export`, undefined, opts),
    /** T1 POST /:guildId/settings/import */
    settingsImport: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/settings/import`, body, opts),
  } as const;
}
