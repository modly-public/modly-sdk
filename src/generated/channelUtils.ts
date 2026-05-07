// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachChannelUtils(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/channel-utils/channels */
    listChannels: (opts?: RequestOptions) =>
      client._request("GET", `/channel-utils/channels`, undefined, opts),
    /** T1 GET /:guildId/channel-utils/channels/:channelId/permissions */
    listPermissions: (channelId: string, opts?: RequestOptions) =>
      client._request("GET", `/channel-utils/channels/${encodeURIComponent(channelId)}/permissions`, undefined, opts),
    /** T1 POST /:guildId/channel-utils/channels */
    channels: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/channel-utils/channels`, body, opts),
    /** T1 PATCH /:guildId/channel-utils/channels/:channelId */
    updateChannels: (channelId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/channel-utils/channels/${encodeURIComponent(channelId)}`, body, opts),
    /** T1 DELETE /:guildId/channel-utils/channels/:channelId */
    deleteChannels: (channelId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/channel-utils/channels/${encodeURIComponent(channelId)}`, undefined, opts),
    /** T1 PUT /:guildId/channel-utils/channels/:channelId/permissions */
    setChannelsPermissions: (channelId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/channel-utils/channels/${encodeURIComponent(channelId)}/permissions`, body, opts),
  } as const;
}
