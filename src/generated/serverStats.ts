// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachServerStats(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/server-stats */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/server-stats`, undefined, opts),
    /** T1 GET /:guildId/server-stats/history */
    listHistory: (opts?: RequestOptions) =>
      client._request("GET", `/server-stats/history`, undefined, opts),
    /** T1 POST /:guildId/server-stats/channels */
    channels: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-stats/channels`, body, opts),
    /** T1 POST /:guildId/server-stats/preview */
    preview: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-stats/preview`, body, opts),
    /** T1 DELETE /:guildId/server-stats/channels/:channelId */
    deleteChannels: (channelId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/server-stats/channels/${encodeURIComponent(channelId)}`, undefined, opts),
    /** T1 POST /:guildId/server-stats/channels/create */
    channelsCreate: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-stats/channels/create`, body, opts),
    /** T1 POST /:guildId/server-stats/packs */
    packs: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-stats/packs`, body, opts),
    /** T1 POST /:guildId/server-stats/custom */
    custom: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/server-stats/custom`, body, opts),
    /** T1 DELETE /:guildId/server-stats/custom/:key */
    deleteCustom: (key: string, opts?: RequestOptions) =>
      client._request("DELETE", `/server-stats/custom/${encodeURIComponent(key)}`, undefined, opts),
    /** T1 POST /:guildId/server-stats/refresh */
    refresh: (opts?: RequestOptions) =>
      client._request("POST", `/server-stats/refresh`, undefined, opts),
    /** T1 GET /:guildId/server-stats/diagnostics */
    listDiagnostics: (opts?: RequestOptions) =>
      client._request("GET", `/server-stats/diagnostics`, undefined, opts),
  } as const;
}
