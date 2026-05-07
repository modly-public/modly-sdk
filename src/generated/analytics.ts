// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachAnalytics(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/analytics/confessions */
    listConfessions: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/confessions`, undefined, opts),
    /** T1 GET /:guildId/analytics/modules */
    listModules: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/modules`, undefined, opts),
    /** T1 GET /:guildId/analytics/modules/:moduleKey */
    getModuleKey: (moduleKey: string, opts?: RequestOptions) =>
      client._request("GET", `/analytics/modules/${encodeURIComponent(moduleKey)}`, undefined, opts),
    /** T1 GET /:guildId/analytics/polls */
    listPolls: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/polls`, undefined, opts),
    /** T1 GET /:guildId/analytics/reminders */
    listReminders: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/reminders`, undefined, opts),
    /** T1 GET /:guildId/analytics/messages-per-day */
    listMessagesPerDay: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/messages-per-day`, undefined, opts),
    /** T1 GET /:guildId/analytics/voice-per-day */
    listVoicePerDay: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/voice-per-day`, undefined, opts),
    /** T1 GET /:guildId/analytics/member-growth */
    listMemberGrowth: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/member-growth`, undefined, opts),
    /** T1 GET /:guildId/analytics/top-users */
    listTopUsers: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/top-users`, undefined, opts),
    /** T1 GET /:guildId/analytics/top-channels */
    listTopChannels: (opts?: RequestOptions) =>
      client._request("GET", `/analytics/top-channels`, undefined, opts),
  } as const;
}
