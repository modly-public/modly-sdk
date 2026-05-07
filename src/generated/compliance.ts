// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCompliance(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/compliance/report */
    listReport: (opts?: RequestOptions) =>
      client._request("GET", `/compliance/report`, undefined, opts),
    /** T1 GET /:guildId/compliance/reports */
    listReports: (opts?: RequestOptions) =>
      client._request("GET", `/compliance/reports`, undefined, opts),
    /** T1 GET /:guildId/compliance/reports/:reportId/pdf */
    listPdf: (reportId: string, opts?: RequestOptions) =>
      client._request("GET", `/compliance/reports/${encodeURIComponent(reportId)}/pdf`, undefined, opts),
  } as const;
}
