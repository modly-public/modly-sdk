// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAccount(client: ModlyClient) {
  return {
    /** T1 GET /premium */
    listPremium: (opts?: RequestOptions) =>
      client._request("GET", `/premium`, undefined, opts),
    /** T1 POST /premium/assign */
    premiumAssign: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/premium/assign`, body, opts),
    /** T1 GET /referrals */
    listReferrals: (opts?: RequestOptions) =>
      client._request("GET", `/referrals`, undefined, opts),
    /** T1 POST /referrals/apply */
    referralsApply: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/referrals/apply`, body, opts),
    /** T1 GET /billing/invoices */
    listInvoices: (opts?: RequestOptions) =>
      client._request("GET", `/billing/invoices`, undefined, opts),
    /** T1 DELETE /premium/assign/:guildId */
    deletePremiumAssign: (opts?: RequestOptions) =>
      client._request("DELETE", `/premium/assign/:guildId`, undefined, opts),
  } as const;
}
