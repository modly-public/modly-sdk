// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachIntegrations(client: ModlyClient) {
  return {
    /** T1 POST /:product/:guildId/events */
    events: (product: string, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(product)}/:guildId/events`, undefined, opts),
  } as const;
}
