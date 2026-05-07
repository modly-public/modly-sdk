// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAutoresponders(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/autoresponders */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/autoresponders`, undefined, opts),
    /** T1 POST /:guildId/autoresponders */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/autoresponders`, body, opts),
    /** T1 PATCH /:guildId/autoresponders/:ruleId */
    update: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/autoresponders/${encodeURIComponent(ruleId)}`, body, opts),
    /** T1 DELETE /:guildId/autoresponders/:ruleId */
    delete: (ruleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/autoresponders/${encodeURIComponent(ruleId)}`, undefined, opts),
    /** T1 POST /:guildId/autoresponders/:ruleId/duplicate */
    duplicate: (ruleId: string, opts?: RequestOptions) =>
      client._request("POST", `/autoresponders/${encodeURIComponent(ruleId)}/duplicate`, undefined, opts),
  } as const;
}
