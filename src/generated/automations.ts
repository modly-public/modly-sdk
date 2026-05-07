// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAutomations(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/automations */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/automations`, undefined, opts),
    /** T1 POST /:guildId/automations/rules */
    rules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/automations/rules`, body, opts),
    /** T1 DELETE /:guildId/automations/rules/:ruleId */
    deleteRules: (ruleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/automations/rules/${encodeURIComponent(ruleId)}`, undefined, opts),
    /** T1 POST /:guildId/automations/test */
    test: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/automations/test`, body, opts),
  } as const;
}
