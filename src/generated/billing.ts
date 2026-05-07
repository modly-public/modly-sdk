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
    /** T2 POST /billing/resume */
    // TODO: migrate billing.ts to defineRoute() for typed body
    resume: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/billing/resume`, body, opts),
    /** T2 POST /billing/portal */
    // TODO: migrate billing.ts to defineRoute() for typed body
    portal: (body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/billing/portal`, body, opts),
  } as const;
}
