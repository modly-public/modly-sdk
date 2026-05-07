// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachMemberNotes(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/member-notes */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/member-notes`, undefined, opts),
    /** T1 GET /:guildId/member-notes/stats */
    listStats: (opts?: RequestOptions) =>
      client._request("GET", `/member-notes/stats`, undefined, opts),
    /** T1 GET /:guildId/member-notes/:noteId */
    getNote: (noteId: string, opts?: RequestOptions) =>
      client._request("GET", `/member-notes/${encodeURIComponent(noteId)}`, undefined, opts),
    /** T1 POST /:guildId/member-notes */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/member-notes`, body, opts),
    /** T1 PATCH /:guildId/member-notes/:noteId */
    update: (noteId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/member-notes/${encodeURIComponent(noteId)}`, body, opts),
    /** T2 POST /:guildId/member-notes/:noteId/pin */
    // TODO: migrate member-notes.ts to defineRoute() for typed body
    pin: (noteId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/member-notes/${encodeURIComponent(noteId)}/pin`, body, opts),
    /** T1 DELETE /:guildId/member-notes/:noteId */
    delete: (noteId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/member-notes/${encodeURIComponent(noteId)}`, undefined, opts),
    /** T2 POST /:guildId/member-notes/:noteId/restore */
    // TODO: migrate member-notes.ts to defineRoute() for typed body
    restore: (noteId: string, body?: unknown, opts?: RequestOptions) =>
      client._request("POST", `/member-notes/${encodeURIComponent(noteId)}/restore`, body, opts),
    /** T1 GET /:guildId/member-notes/:noteId/revisions */
    listRevisions: (noteId: string, opts?: RequestOptions) =>
      client._request("GET", `/member-notes/${encodeURIComponent(noteId)}/revisions`, undefined, opts),
  } as const;
}
