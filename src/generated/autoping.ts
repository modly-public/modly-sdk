// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAutoping(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/autoping */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/autoping`, undefined, opts),
    /** T1 PATCH /:guildId/autoping/settings */
    updateSettings: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/autoping/settings`, body, opts),
    /** T1 POST /:guildId/autoping/rules */
    rules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/autoping/rules`, body, opts),
    /** T1 PATCH /:guildId/autoping/rules/:ruleId */
    updateRules: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/autoping/rules/${encodeURIComponent(ruleId)}`, body, opts),
    /** T1 DELETE /:guildId/autoping/rules/:ruleId */
    deleteRules: (ruleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/autoping/rules/${encodeURIComponent(ruleId)}`, undefined, opts),
  } as const;
}
