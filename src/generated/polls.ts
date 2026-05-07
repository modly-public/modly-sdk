// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachPolls(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/polls */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/polls`, undefined, opts),
    /** T1 GET /:guildId/polls/:pollId/export.csv */
    listExportCsv: (pollId: string, opts?: RequestOptions) =>
      client._request("GET", `/polls/${encodeURIComponent(pollId)}/export.csv`, undefined, opts),
    /** T1 POST /:guildId/polls */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/polls`, body, opts),
    /** T1 PATCH /:guildId/polls/:pollId */
    update: (pollId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/polls/${encodeURIComponent(pollId)}`, body, opts),
    /** T1 POST /:guildId/polls/:pollId/close */
    close: (pollId: string, opts?: RequestOptions) =>
      client._request("POST", `/polls/${encodeURIComponent(pollId)}/close`, undefined, opts),
    /** T1 POST /:guildId/polls/:pollId/reopen */
    reopen: (pollId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/polls/${encodeURIComponent(pollId)}/reopen`, body, opts),
    /** T1 DELETE /:guildId/polls/:pollId */
    delete: (pollId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/polls/${encodeURIComponent(pollId)}`, undefined, opts),
  } as const;
}
