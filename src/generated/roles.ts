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
    /** T1 PATCH /:guildId/roles/panels/:panelId */
    updatePanels: (panelId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/roles/panels/${encodeURIComponent(panelId)}`, body, opts),
    /** T1 POST /:guildId/roles/panels/:panelId/publish */
    panelsPublish: (panelId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/panels/${encodeURIComponent(panelId)}/publish`, body, opts),
    /** T1 DELETE /:guildId/roles/panels/:panelId */
    deletePanels: (panelId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/panels/${encodeURIComponent(panelId)}`, undefined, opts),
    /** T1 GET /:guildId/roles */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/roles`, undefined, opts),
    /** T1 POST /:guildId/roles */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles`, body, opts),
    /** T1 PATCH /:guildId/roles/:roleId */
    updateRole: (roleId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/roles/${encodeURIComponent(roleId)}`, body, opts),
    /** T1 DELETE /:guildId/roles/:roleId */
    deleteRole: (roleId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/roles/${encodeURIComponent(roleId)}`, undefined, opts),
    /** T1 PUT /:guildId/roles/assignments */
    setAssignments: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/roles/assignments`, body, opts),
    /** T1 DELETE /:guildId/roles/assignments */
    deleteAssignments: (opts?: RequestOptions) =>
      client._request("DELETE", `/roles/assignments`, undefined, opts),
    /** T1 GET /:guildId/roles/reaction-roles */
    listReactionRoles: (opts?: RequestOptions) =>
      client._request("GET", `/roles/reaction-roles`, undefined, opts),
    /** T1 POST /:guildId/roles/reaction-roles */
    reactionRoles: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/reaction-roles`, body, opts),
    /** T1 GET /:guildId/roles/activity-roles */
    listActivityRoles: (opts?: RequestOptions) =>
      client._request("GET", `/roles/activity-roles`, undefined, opts),
    /** T1 POST /:guildId/roles/activity-roles */
    activityRoles: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/roles/activity-roles`, body, opts),
    /** T1 GET /:guildId/roles/color-roles */
    listColorRoles: (opts?: RequestOptions) =>
      client._request("GET", `/roles/color-roles`, undefined, opts),
    /** T1 GET /:guildId/roles/temp-roles */
    listTempRoles: (opts?: RequestOptions) =>
      client._request("GET", `/roles/temp-roles`, undefined, opts),
    /** T1 GET /:guildId/roles/backups */
    listBackups: (opts?: RequestOptions) =>
      client._request("GET", `/roles/backups`, undefined, opts),
  } as const;
}
