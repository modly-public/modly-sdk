// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachPersonalization(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/personalization/bot-token */
    listBotToken: (opts?: RequestOptions) =>
      client._request("GET", `/personalization/bot-token`, undefined, opts),
    /** T1 PUT /:guildId/personalization/bot-token */
    setBotToken: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/personalization/bot-token`, body, opts),
    /** T1 DELETE /:guildId/personalization/bot-token */
    deleteBotToken: (opts?: RequestOptions) =>
      client._request("DELETE", `/personalization/bot-token`, undefined, opts),
    /** T1 POST /:guildId/personalization/bot-token/reconnect */
    botTokenReconnect: (opts?: RequestOptions) =>
      client._request("POST", `/personalization/bot-token/reconnect`, undefined, opts),
  } as const;
}
