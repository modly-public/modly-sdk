// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachGiveaways(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/giveaways/status */
    listStatus: (opts?: RequestOptions) =>
      client._request("GET", `/giveaways/status`, undefined, opts),
    /** T1 GET /:guildId/giveaways */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/giveaways`, undefined, opts),
    /** T1 PUT /:guildId/giveaways/:giveawayId/image */
    setImage: (giveawayId: string, opts?: RequestOptions) =>
      client._request("PUT", `/giveaways/${encodeURIComponent(giveawayId)}/image`, undefined, opts),
    /** T1 POST /:guildId/giveaways */
    create: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways`, body, opts),
    /** T1 PATCH /:guildId/giveaways/:giveawayId */
    updateGiveaway: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PATCH", `/giveaways/${encodeURIComponent(giveawayId)}`, body, opts),
    /** T1 GET /:guildId/giveaways/:giveawayId/health */
    listHealth: (giveawayId: string, opts?: RequestOptions) =>
      client._request("GET", `/giveaways/${encodeURIComponent(giveawayId)}/health`, undefined, opts),
    /** T1 GET /:guildId/giveaways/:giveawayId/analysis */
    listAnalysis: (giveawayId: string, opts?: RequestOptions) =>
      client._request("GET", `/giveaways/${encodeURIComponent(giveawayId)}/analysis`, undefined, opts),
    /** T1 GET /:guildId/giveaways/:giveawayId/eligibility/:userId */
    getUser: (giveawayId: string, userId: string, opts?: RequestOptions) =>
      client._request("GET", `/giveaways/${encodeURIComponent(giveawayId)}/eligibility/${encodeURIComponent(userId)}`, undefined, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/clone */
    clone: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/clone`, body, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/publish */
    publish: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/publish`, body, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/end */
    end: (giveawayId: string, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/end`, undefined, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/reroll */
    reroll: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/reroll`, body, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/cancel */
    cancel: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/cancel`, body, opts),
    /** T1 DELETE /:guildId/giveaways/:giveawayId */
    deleteGiveaway: (giveawayId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/giveaways/${encodeURIComponent(giveawayId)}`, undefined, opts),
    /** T1 GET /:guildId/giveaways/:giveawayId/participants.csv */
    listParticipantsCsv: (giveawayId: string, opts?: RequestOptions) =>
      client._request("GET", `/giveaways/${encodeURIComponent(giveawayId)}/participants.csv`, undefined, opts),
    /** T1 GET /:guildId/giveaways/:giveawayId/export */
    listExport: (giveawayId: string, opts?: RequestOptions) =>
      client._request("GET", `/giveaways/${encodeURIComponent(giveawayId)}/export`, undefined, opts),
    /** T1 POST /:guildId/giveaways/import */
    import: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/import`, body, opts),
    /** T1 POST /:guildId/giveaways/:giveawayId/participants */
    participants: (giveawayId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/giveaways/${encodeURIComponent(giveawayId)}/participants`, body, opts),
  } as const;
}
