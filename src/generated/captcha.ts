// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCaptcha(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/captcha */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/captcha`, undefined, opts),
    /** T1 POST /:guildId/captcha/:challengeId/cancel */
    cancel: (challengeId: string, opts?: RequestOptions) =>
      client._request("POST", `/captcha/${encodeURIComponent(challengeId)}/cancel`, undefined, opts),
    /** T1 POST /:guildId/captcha/users/:userId/clear */
    usersClear: (userId: string, opts?: RequestOptions) =>
      client._request("POST", `/captcha/users/${encodeURIComponent(userId)}/clear`, undefined, opts),
  } as const;
}
