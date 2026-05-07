// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachUserInput(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/user-input */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/user-input`, undefined, opts),
    /** T1 POST /:guildId/user-input/types */
    types: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/user-input/types`, body, opts),
    /** T1 DELETE /:guildId/user-input/types/:typeId */
    deleteTypes: (typeId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/user-input/types/${encodeURIComponent(typeId)}`, undefined, opts),
    /** T1 GET /:guildId/user-input/submissions */
    listSubmissions: (opts?: RequestOptions) =>
      client._request("GET", `/user-input/submissions`, undefined, opts),
    /** T1 POST /:guildId/user-input/submissions/:submissionId/status */
    submissionsStatus: (submissionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/user-input/submissions/${encodeURIComponent(submissionId)}/status`, body, opts),
    /** T1 POST /:guildId/user-input/submissions/:submissionId/assign */
    submissionsAssign: (submissionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/user-input/submissions/${encodeURIComponent(submissionId)}/assign`, body, opts),
    /** T1 POST /:guildId/user-input/submissions/:submissionId/comments */
    submissionsComments: (submissionId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/user-input/submissions/${encodeURIComponent(submissionId)}/comments`, body, opts),
  } as const;
}
