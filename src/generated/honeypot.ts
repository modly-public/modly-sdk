// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachHoneypot(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/honeypot */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/honeypot`, undefined, opts),
    /** T2 POST /:guildId/honeypot/traps/resend */
    // TODO: migrate honeypot.ts to defineRoute() for typed body
    trapsResend: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/honeypot/traps/resend`, body, opts),
  } as const;
}
