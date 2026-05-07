// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachRelay(client: ModlyClient) {
  return {
    /** T1 POST /:guildId/relay/:ruleId/test */
    test: (ruleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/relay/${encodeURIComponent(ruleId)}/test`, body, opts),
  } as const;
}
