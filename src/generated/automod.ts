// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAutomod(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/automod/rules */
    listRules: (opts?: RequestOptions) =>
      client._request("GET", `/automod/rules`, undefined, opts),
    /** T1 GET /:guildId/automod/telemetry */
    listTelemetry: (opts?: RequestOptions) =>
      client._request("GET", `/automod/telemetry`, undefined, opts),
    /** T1 POST /:guildId/automod/test */
    test: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/automod/test`, body, opts),
    /** T1 POST /:guildId/automod/rules/:id/test */
    rulesTest: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/automod/rules/${encodeURIComponent(id)}/test`, body, opts),
    /** T1 POST /:guildId/automod/rules */
    rules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/automod/rules`, body, opts),
    /** T1 PATCH /:guildId/automod/rules/:id */
    updateRules: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/automod/rules/${encodeURIComponent(id)}`, body, opts),
    /** T1 DELETE /:guildId/automod/rules/:id */
    deleteRules: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/automod/rules/${encodeURIComponent(id)}`, undefined, opts),
  } as const;
}
