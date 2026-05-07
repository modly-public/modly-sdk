// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachSuggestionsRoadmap(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/suggestions/roadmap */
    listRoadmap: (opts?: RequestOptions) =>
      client._request("GET", `/suggestions/roadmap`, undefined, opts),
  } as const;
}
