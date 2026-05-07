// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachHoneypot(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/honeypot */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/honeypot`, undefined, opts),
    /** T1 POST /:guildId/honeypot/traps/resend */
    trapsResend: (opts?: RequestOptions) =>
      client._request("POST", `/honeypot/traps/resend`, undefined, opts),
  } as const;
}
