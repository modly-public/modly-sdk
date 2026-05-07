// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachEconomy(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/economy */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/economy`, undefined, opts),
    /** T1 POST /:guildId/economy/shop */
    shop: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/economy/shop`, body, opts),
    /** T1 PATCH /:guildId/economy/shop/:itemId */
    updateShop: (itemId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/economy/shop/${encodeURIComponent(itemId)}`, body, opts),
    /** T1 DELETE /:guildId/economy/shop/:itemId */
    deleteShop: (itemId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/economy/shop/${encodeURIComponent(itemId)}`, undefined, opts),
    /** T1 GET /:guildId/economy/users/:userId/balance */
    listBalance: (userId: string, opts?: RequestOptions) =>
      client._request("GET", `/economy/users/${encodeURIComponent(userId)}/balance`, undefined, opts),
    /** T1 GET /:guildId/economy/transactions */
    listTransactions: (opts?: RequestOptions) =>
      client._request("GET", `/economy/transactions`, undefined, opts),
    /** T1 GET /:guildId/economy/top */
    listTop: (opts?: RequestOptions) =>
      client._request("GET", `/economy/top`, undefined, opts),
    /** T1 POST /:guildId/economy/give */
    give: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/economy/give`, body, opts),
    /** T1 POST /:guildId/economy/take */
    take: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/economy/take`, body, opts),
  } as const;
}
