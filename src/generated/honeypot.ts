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
    /** T1 POST /:guildId/honeypot/channels */
    channels: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/honeypot/channels`, body, opts),
    /** T1 DELETE /:guildId/honeypot/channels/:channelId */
    deleteChannels: (channelId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/honeypot/channels/${encodeURIComponent(channelId)}`, undefined, opts),
    /** T1 GET /:guildId/honeypot/stats */
    listStats: (opts?: RequestOptions) =>
      client._request("GET", `/honeypot/stats`, undefined, opts),
  } as const;
}
