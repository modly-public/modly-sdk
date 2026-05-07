// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachWebhooks(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/outbound-webhooks/events */
    listEvents: (opts?: RequestOptions) =>
      client._request("GET", `/outbound-webhooks/events`, undefined, opts),
    /** T1 GET /:guildId/outbound-webhooks */
    listOutboundWebhooks: (opts?: RequestOptions) =>
      client._request("GET", `/outbound-webhooks`, undefined, opts),
    /** T1 POST /:guildId/outbound-webhooks/preview */
    outboundWebhooksPreview: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/outbound-webhooks/preview`, body, opts),
    /** T1 POST /:guildId/outbound-webhooks */
    outboundWebhooks: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/outbound-webhooks`, body, opts),
    /** T1 PATCH /:guildId/outbound-webhooks/:hookId */
    updateOutboundWebhooks: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/outbound-webhooks/${encodeURIComponent(hookId)}`, body, opts),
    /** T1 POST /:guildId/outbound-webhooks/:hookId/test */
    outboundWebhooksTest: (hookId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/outbound-webhooks/${encodeURIComponent(hookId)}/test`, body, opts),
    /** T1 POST /:guildId/outbound-webhooks/:hookId/deliveries/:deliveryId/replay */
    outboundWebhooksDeliveriesReplay: (hookId: string, deliveryId: string, opts?: RequestOptions) =>
      client._request("POST", `/outbound-webhooks/${encodeURIComponent(hookId)}/deliveries/${encodeURIComponent(deliveryId)}/replay`, undefined, opts),
    /** T1 DELETE /:guildId/outbound-webhooks/:hookId */
    deleteOutboundWebhooks: (hookId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/outbound-webhooks/${encodeURIComponent(hookId)}`, undefined, opts),
  } as const;
}
