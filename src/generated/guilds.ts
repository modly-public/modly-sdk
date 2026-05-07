// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachGuilds(client: ModlyClient) {
  return {
    /** T1 GET /:id */
    get: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 PATCH /:id */
    patch: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/${encodeURIComponent(id)}`, body, opts),
    /** T1 GET /:id/modules */
    listModules: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/modules`, undefined, opts),
    /** T1 PATCH /:id/modules/:key */
    updateModules: (id: string, key: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/${encodeURIComponent(id)}/modules/${encodeURIComponent(key)}`, body, opts),
    /** T1 GET /:id/settings */
    listSettings: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/settings`, undefined, opts),
    /** T1 PATCH /:id/settings */
    updateSettings: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/${encodeURIComponent(id)}/settings`, body, opts),
  } as const;
}
