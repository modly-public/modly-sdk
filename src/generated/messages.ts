// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMessages(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/messages */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/messages`, undefined, opts),
    /** T1 GET /:guildId/messages/:key */
    getKey: (key: string, opts?: RequestOptions) =>
      client._request("GET", `/messages/${encodeURIComponent(key)}`, undefined, opts),
    /** T1 POST /:guildId/messages/default-embeds/seed */
    defaultEmbedsSeed: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/messages/default-embeds/seed`, body, opts),
    /** T1 PUT /:guildId/messages/:key */
    set: (key: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/messages/${encodeURIComponent(key)}`, body, opts),
    /** T1 DELETE /:guildId/messages/:key */
    delete: (key: string, opts?: RequestOptions) =>
      client._request("DELETE", `/messages/${encodeURIComponent(key)}`, undefined, opts),
    /** T1 GET /:guildId/messages/:key/instances */
    listInstances: (key: string, opts?: RequestOptions) =>
      client._request("GET", `/messages/${encodeURIComponent(key)}/instances`, undefined, opts),
    /** T1 GET /:guildId/messages/:key/instances/:instanceId */
    getInstance: (key: string, instanceId: string, opts?: RequestOptions) =>
      client._request("GET", `/messages/${encodeURIComponent(key)}/instances/${encodeURIComponent(instanceId)}`, undefined, opts),
    /** T1 PATCH /:guildId/messages/:key/instances/:instanceId */
    updateInstances: (key: string, instanceId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/messages/${encodeURIComponent(key)}/instances/${encodeURIComponent(instanceId)}`, body, opts),
    /** T1 DELETE /:guildId/messages/:key/instances/:instanceId */
    deleteInstances: (key: string, instanceId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/messages/${encodeURIComponent(key)}/instances/${encodeURIComponent(instanceId)}`, undefined, opts),
  } as const;
}
