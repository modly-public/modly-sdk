// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAi(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/ai/usage */
    listUsage: (opts?: RequestOptions) =>
      client._request("GET", `/ai/usage`, undefined, opts),
    /** T1 GET /:guildId/ai/flags */
    listFlags: (opts?: RequestOptions) =>
      client._request("GET", `/ai/flags`, undefined, opts),
    /** T1 GET /:guildId/ai/review */
    listReview: (opts?: RequestOptions) =>
      client._request("GET", `/ai/review`, undefined, opts),
    /** T1 POST /:guildId/ai/flags/:id/resolve */
    flagsResolve: (id: string, opts?: RequestOptions) =>
      client._request("POST", `/ai/flags/${encodeURIComponent(id)}/resolve`, undefined, opts),
    /** T1 POST /:guildId/ai/flags/:id/feedback */
    flagsFeedback: (id: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/flags/${encodeURIComponent(id)}/feedback`, body, opts),
    /** T1 POST /:guildId/ai/approvals/:approvalId/approve */
    approvalsApprove: (approvalId: string, opts?: RequestOptions) =>
      client._request("POST", `/ai/approvals/${encodeURIComponent(approvalId)}/approve`, undefined, opts),
    /** T1 POST /:guildId/ai/approvals/:approvalId/reject */
    approvalsReject: (approvalId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/approvals/${encodeURIComponent(approvalId)}/reject`, body, opts),
    /** T1 GET /:guildId/ai/policies */
    listPolicies: (opts?: RequestOptions) =>
      client._request("GET", `/ai/policies`, undefined, opts),
    /** T1 POST /:guildId/ai/policies/snapshot */
    policiesSnapshot: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/policies/snapshot`, body, opts),
    /** T1 POST /:guildId/ai/policies/:version/restore */
    policiesRestore: (version: string, opts?: RequestOptions) =>
      client._request("POST", `/ai/policies/${encodeURIComponent(version)}/restore`, undefined, opts),
    /** T1 POST /:guildId/ai/simulate */
    simulate: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/simulate`, body, opts),
    /** T1 POST /:guildId/ai/credentials/:provider */
    credentials: (provider: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/credentials/${encodeURIComponent(provider)}`, body, opts),
    /** T1 DELETE /:guildId/ai/credentials/:provider */
    deleteCredentials: (provider: string, opts?: RequestOptions) =>
      client._request("DELETE", `/ai/credentials/${encodeURIComponent(provider)}`, undefined, opts),
    /** T1 GET /:guildId/ai/credentials */
    listCredentials: (opts?: RequestOptions) =>
      client._request("GET", `/ai/credentials`, undefined, opts),
    /** T1 POST /:guildId/ai/run */
    run: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/ai/run`, body, opts),
  } as const;
}
