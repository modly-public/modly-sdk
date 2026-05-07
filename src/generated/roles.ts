// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachRoles(client: ModlyClient) {
  return {
    /** T1 POST /:guildId/roles/auto */
    auto: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/auto`, body, opts),
    /** T1 DELETE /:guildId/roles/auto/:id */
    deleteAuto: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/auto/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/roles/reactions */
    reactions: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/reactions`, body, opts),
    /** T1 DELETE /:guildId/roles/reactions/:id */
    deleteReactions: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/reactions/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/roles/temp */
    temp: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/temp`, body, opts),
    /** T1 DELETE /:guildId/roles/temp/:id */
    deleteTemp: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/temp/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/roles/rules */
    rules: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/rules`, body, opts),
    /** T1 DELETE /:guildId/roles/rules/:id */
    deleteRules: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/rules/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/roles/backups */
    backups: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/backups`, body, opts),
    /** T1 POST /:guildId/roles/backups/:id/restore */
    backupsRestore: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/roles/backups/${encodeURIComponent(id)}/restore`, undefined, opts),
    /** T1 GET /:guildId/roles/backups/:id/preview */
    listPreview: (id: string, opts?: RequestOptions) =>
      client._request("GET", `/roles/backups/${encodeURIComponent(id)}/preview`, undefined, opts),
    /** T1 DELETE /:guildId/roles/backups/:id */
    deleteBackups: (id: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/backups/${encodeURIComponent(id)}`, undefined, opts),
    /** T1 POST /:guildId/roles/panels */
    panels: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/panels`, body, opts),
    /** T1 POST /:guildId/roles/panels/:panelId/publish */
    panelsPublish: (panelId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/panels/${encodeURIComponent(panelId)}/publish`, body, opts),
    /** T1 DELETE /:guildId/roles/panels/:panelId */
    deletePanels: (panelId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/panels/${encodeURIComponent(panelId)}`, undefined, opts),
    /** T1 GET /:guildId/roles */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/roles`, undefined, opts),
  } as const;
}
