// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCases(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/cases */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/cases`, undefined, opts),
    /** T1 GET /:guildId/cases/:number */
    getNumber: (number: string, opts?: RequestOptions) =>
      client._request("GET", `/cases/${encodeURIComponent(number)}`, undefined, opts),
    /** T1 PATCH /:guildId/cases/:number */
    updateNumber: (number: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/cases/${encodeURIComponent(number)}`, body, opts),
    /** T1 POST /:guildId/cases/ban */
    ban: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/ban`, body, opts),
    /** T1 POST /:guildId/cases/kick */
    kick: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/kick`, body, opts),
    /** T1 POST /:guildId/cases/timeout */
    timeout: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/timeout`, body, opts),
    /** T1 POST /:guildId/cases/warn */
    warn: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/warn`, body, opts),
    /** T1 POST /:guildId/cases/note */
    note: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/note`, body, opts),
    /** T1 POST /:guildId/cases/unban */
    unban: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/unban`, body, opts),
    /** T1 POST /:guildId/cases/untimeout */
    untimeout: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/untimeout`, body, opts),
    /** T1 POST /:guildId/cases/softban */
    softban: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/softban`, body, opts),
    /** T1 POST /:guildId/cases/mass-ban */
    massBan: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/cases/mass-ban`, body, opts),
  } as const;
}
