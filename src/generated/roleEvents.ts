// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachRoleEvents(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/role-events */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/role-events`, undefined, opts),
    /** T1 POST /:guildId/role-events/rules */
    rules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/role-events/rules`, body, opts),
    /** T1 DELETE /:guildId/role-events/rules/:ruleId */
    deleteRules: (ruleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/role-events/rules/${encodeURIComponent(ruleId)}`, undefined, opts),
    /** T1 POST /:guildId/role-events/test */
    test: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/role-events/test`, body, opts),
  } as const;
}
