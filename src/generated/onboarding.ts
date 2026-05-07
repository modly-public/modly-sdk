// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachOnboarding(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/onboarding */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/onboarding`, undefined, opts),
    /** T1 GET /:guildId/onboarding/ab-report */
    listAbReport: (opts?: RequestOptions) =>
      client._request("GET", `/onboarding/ab-report`, undefined, opts),
    /** T1 PUT /:guildId/onboarding */
    put: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/onboarding`, body, opts),
    /** T1 DELETE /:guildId/onboarding */
    delete: (opts?: RequestOptions) =>
      client._request("DELETE", `/onboarding`, undefined, opts),
    /** T1 GET /:guildId/onboarding/completions */
    listCompletions: (opts?: RequestOptions) =>
      client._request("GET", `/onboarding/completions`, undefined, opts),
  } as const;
}
