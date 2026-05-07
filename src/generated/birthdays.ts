// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachBirthdays(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/birthdays/me */
    listMe: (opts?: RequestOptions) =>
      client._request("GET", `/birthdays/me`, undefined, opts),
    /** T1 PUT /:guildId/birthdays/me */
    setMe: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("PUT", `/birthdays/me`, body, opts),
    /** T1 DELETE /:guildId/birthdays/me */
    deleteMe: (opts?: RequestOptions) =>
      client._request("DELETE", `/birthdays/me`, undefined, opts),
    /** T1 GET /:guildId/birthdays */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/birthdays`, undefined, opts),
    /** T1 GET /:guildId/birthdays/this-month */
    listThisMonth: (opts?: RequestOptions) =>
      client._request("GET", `/birthdays/this-month`, undefined, opts),
    /** T1 POST /:guildId/birthdays/announce */
    announce: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/birthdays/announce`, body, opts),
  } as const;
}
