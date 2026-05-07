// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachGuilds(client: ModlyClient) {
  return {
    /** T1 GET /:id/audit */
    listAudit: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/audit`, undefined, opts),
    /** T1 GET /:id/audit/:entryId */
    getEntry: (id: string, entryId: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/audit/${encodeURIComponent(entryId)}`, undefined, opts),
    /** T1 POST /:id/audit/:entryId/restore */
    auditRestore: (id: string, entryId: string, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/audit/${encodeURIComponent(entryId)}/restore`, undefined, opts),
    /** T1 GET /:id/support/status */
    listStatus: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/support/status`, undefined, opts),
    /** T1 POST /:id/support/credentials */
    supportCredentials: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/support/credentials`, body, opts),
    /** T1 DELETE /:id/support/credentials/:kind */
    deleteSupportCredentials: (id: string, kind: string, opts?: RequestOptions) =>
      client._request("DELETE", `/${encodeURIComponent(id)}/support/credentials/${encodeURIComponent(kind)}`, undefined, opts),
    /** T1 GET /:id/support/diagnostics */
    listDiagnostics: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/support/diagnostics`, undefined, opts),
    /** T1 POST /:id/support/events */
    supportEvents: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/support/events`, body, opts),
    /** T1 GET /:id/support/openapi */
    listOpenapi: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/support/openapi`, undefined, opts),
    /** T1 POST /:id/support/proxy */
    supportProxy: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/support/proxy`, body, opts),
    /** T1 GET /:id/support/mcp/tools */
    listTools: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/support/mcp/tools`, undefined, opts),
    /** T1 POST /:id/support/mcp/call */
    supportMcpCall: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/support/mcp/call`, body, opts),
    /** T1 GET /:id/restore-hub/status */
    listStatus_get1: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/restore-hub/status`, undefined, opts),
    /** T1 POST /:id/restore-hub/credentials */
    restoreHubCredentials: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/restore-hub/credentials`, body, opts),
    /** T1 DELETE /:id/restore-hub/credentials/:kind */
    deleteRestoreHubCredentials: (id: string, kind: string, opts?: RequestOptions) =>
      client._request("DELETE", `/${encodeURIComponent(id)}/restore-hub/credentials/${encodeURIComponent(kind)}`, undefined, opts),
    /** T1 GET /:id/restore-hub/diagnostics */
    listDiagnostics_get1: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/restore-hub/diagnostics`, undefined, opts),
    /** T1 POST /:id/restore-hub/events */
    restoreHubEvents: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/restore-hub/events`, body, opts),
    /** T1 GET /:id/restore-hub/openapi */
    listOpenapi_get1: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/restore-hub/openapi`, undefined, opts),
    /** T1 POST /:id/restore-hub/proxy */
    restoreHubProxy: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/restore-hub/proxy`, body, opts),
    /** T1 GET /:id/restore-hub/mcp/tools */
    listTools_get1: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/${encodeURIComponent(id)}/restore-hub/mcp/tools`, undefined, opts),
    /** T1 POST /:id/restore-hub/mcp/call */
    restoreHubMcpCall: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/${encodeURIComponent(id)}/restore-hub/mcp/call`, body, opts),
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
