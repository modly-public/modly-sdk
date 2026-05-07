// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachRecipes(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/recipes/importers */
    listImporters: (opts?: RequestOptions) =>
      client._request("GET", `/recipes/importers`, undefined, opts),
    /** T2 POST /:guildId/recipes/install */
    // TODO: migrate recipes.ts to defineRoute() for typed body
    install: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/recipes/install`, body, opts),
  } as const;
}
