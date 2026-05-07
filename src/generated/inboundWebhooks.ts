// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachInboundWebhooks(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/inbound-webhooks/presets */
    listPresets: (opts?: RequestOptions) =>
      client._request("GET", `/inbound-webhooks/presets`, undefined, opts),
    /** T1 GET /:guildId/inbound-webhooks/:hookId/variables */
    listVariables: (hookId: string, opts?: RequestOptions) =>
      client._request("GET", `/inbound-webhooks/${encodeURIComponent(hookId)}/variables`, undefined, opts),
    /** T1 GET /:guildId/inbound-webhooks/:hookId/secrets */
    listSecrets: (hookId: string, opts?: RequestOptions) =>
      client._request("GET", `/inbound-webhooks/${encodeURIComponent(hookId)}/secrets`, undefined, opts),
    /** T1 POST /:guildId/inbound-webhooks/:hookId/secrets */
    secrets: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/inbound-webhooks/${encodeURIComponent(hookId)}/secrets`, body, opts),
    /** T1 DELETE /:guildId/inbound-webhooks/:hookId/secrets/:key */
    deleteSecrets: (hookId: string, key: string, opts?: RequestOptions) =>
      client._request("DELETE", `/inbound-webhooks/${encodeURIComponent(hookId)}/secrets/${encodeURIComponent(key)}`, undefined, opts),
    /** T1 GET /:guildId/inbound-webhooks */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/inbound-webhooks`, undefined, opts),
    /** T1 POST /:guildId/inbound-webhooks */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/inbound-webhooks`, body, opts),
    /** T1 PATCH /:guildId/inbound-webhooks/:hookId */
    update: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/inbound-webhooks/${encodeURIComponent(hookId)}`, body, opts),
    /** T2 POST /:guildId/inbound-webhooks/:hookId/rotate */
    // TODO: migrate inbound-webhooks-admin.ts to defineRoute() for typed body
    rotate: (hookId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/inbound-webhooks/${encodeURIComponent(hookId)}/rotate`, body, opts),
    /** T2 POST /:guildId/inbound-webhooks/:hookId/test */
    // TODO: migrate inbound-webhooks-admin.ts to defineRoute() for typed body
    test: (hookId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/inbound-webhooks/${encodeURIComponent(hookId)}/test`, body, opts),
    /** T2 POST /:guildId/inbound-webhooks/:hookId/deliveries/:deliveryId/replay */
    // TODO: migrate inbound-webhooks-admin.ts to defineRoute() for typed body
    deliveriesReplay: (hookId: string, deliveryId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/inbound-webhooks/${encodeURIComponent(hookId)}/deliveries/${encodeURIComponent(deliveryId)}/replay`, body, opts),
    /** T1 DELETE /:guildId/inbound-webhooks/:hookId */
    delete: (hookId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/inbound-webhooks/${encodeURIComponent(hookId)}`, undefined, opts),
  } as const;
}
