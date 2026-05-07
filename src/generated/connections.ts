// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachConnections(client: ModlyClient) {
  return {
    /** T1 GET /me/connections */
    listConnections: (opts?: RequestOptions) =>
      client._request("GET", `/me/connections`, undefined, opts),
    /** T1 DELETE /me/connections/:provider */
    deleteMeConnections: (provider: string, opts?: RequestOptions) =>
      client._request("DELETE", `/me/connections/${encodeURIComponent(provider)}`, undefined, opts),
    /** T1 GET /connections/github/start */
    listStart: (opts?: RequestOptions) =>
      client._request("GET", `/connections/github/start`, undefined, opts),
    /** T1 GET /me/connections/github/subscriptions */
    listSubscriptions: (opts?: RequestOptions) =>
      client._request("GET", `/me/connections/github/subscriptions`, undefined, opts),
    /** T1 DELETE /me/connections/github/subscriptions/:id */
    deleteMeConnectionsGithubSubscriptions: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/me/connections/github/subscriptions/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 GET /connections/github/callback */
    listCallback: (opts?: RequestOptions) =>
      client._request("GET", `/connections/github/callback`, undefined, opts),
  } as const;
}
