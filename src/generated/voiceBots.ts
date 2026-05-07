// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachVoiceBots(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/voice-bots */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/voice-bots`, undefined, opts),
    /** T1 POST /:guildId/voice-bots */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/voice-bots`, body, opts),
    /** T1 POST /:guildId/voice-bots/:instanceId/reconnect */
    reconnect: (instanceId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/voice-bots/${encodeURIComponent(instanceId)}/reconnect`, body, opts),
    /** T1 PATCH /:guildId/voice-bots/:instanceId */
    update: (instanceId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/voice-bots/${encodeURIComponent(instanceId)}`, body, opts),
    /** T1 DELETE /:guildId/voice-bots/:instanceId */
    delete: (instanceId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/voice-bots/${encodeURIComponent(instanceId)}`, undefined, opts),
  } as const;
}
