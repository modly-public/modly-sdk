// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCommands(client: ModlyClient) {
  return {
    /** T1 GET /:id/commands */
    get: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/commands`, undefined, opts),
    /** T1 PUT /:id/commands/bulk */
    setBulk: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/bulk`, body, opts),
    /** T1 PUT /:id/commands/registration/bulk */
    setRegistrationBulk: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/registration/bulk`, body, opts),
    /** T1 PUT /:id/commands/defaults */
    setDefaults: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/defaults`, body, opts),
    /** T1 PUT /:id/commands/:name/registration */
    setRegistration: (id: string, name: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/${encodeURIComponent(name)}/registration`, body, opts),
    /** T1 PUT /:id/commands/:name */
    set: (id: string, name: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/${encodeURIComponent(name)}`, body, opts),
    /** T2 PUT /:id/commands/:name/options/:path */
    // TODO: migrate commands.ts to defineRoute() for typed body
    setOptions: (id: string, name: string, path: string, body?: unknown, opts?: RequestOptions) =>
      client._request("PUT", `/${encodeURIComponent(id)}/commands/${encodeURIComponent(name)}/options/${encodeURIComponent(path)}`, body, opts),
  } as const;
}
