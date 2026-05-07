// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachForms(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/forms */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/forms`, undefined, opts),
    /** T1 POST /:guildId/forms */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms`, body, opts),
    /** T1 DELETE /:guildId/forms/:formId */
    delete: (formId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/forms/${encodeURIComponent(formId)}`, undefined, opts),
    /** T1 POST /:guildId/forms/:formId/publish */
    publish: (formId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms/${encodeURIComponent(formId)}/publish`, body, opts),
    /** T1 GET /:guildId/forms/submissions */
    listSubmissions: (opts?: RequestOptions) =>
      client._request("GET", `/forms/submissions`, undefined, opts),
    /** T1 POST /:guildId/forms/submissions/:subId/decide */
    submissionsDecide: (subId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms/submissions/${encodeURIComponent(subId)}/decide`, body, opts),
    /** T1 POST /:guildId/forms/submissions/:subId/assign */
    submissionsAssign: (subId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms/submissions/${encodeURIComponent(subId)}/assign`, body, opts),
    /** T1 POST /:guildId/forms/submissions/:subId/notes */
    submissionsNotes: (subId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms/submissions/${encodeURIComponent(subId)}/notes`, body, opts),
    /** T1 GET /:guildId/forms/export */
    listExport: (opts?: RequestOptions) =>
      client._request("GET", `/forms/export`, undefined, opts),
    /** T1 POST /:guildId/forms/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/forms/import`, body, opts),
  } as const;
}
