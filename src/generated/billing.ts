// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachBilling(client: ModlyClient) {
  return {
    /** T1 POST /billing/checkout */
    checkout: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/billing/checkout`, body, opts),
    /** T1 POST /billing/slots */
    slots: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/billing/slots`, body, opts),
    /** T1 POST /billing/cancel */
    cancel: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/billing/cancel`, body, opts),
    /** T1 POST /billing/resume */
    resume: (opts?: RequestOptions) =>
      client._request("POST", `/billing/resume`, undefined, opts),
    /** T1 POST /billing/portal */
    portal: (opts?: RequestOptions) =>
      client._request("POST", `/billing/portal`, undefined, opts),
  } as const;
}
