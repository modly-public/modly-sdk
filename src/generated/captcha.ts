// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachCaptcha(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/captcha */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/captcha`, undefined, opts),
    /** T1 POST /:guildId/captcha/:challengeId/cancel */
    cancel: (challengeId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/captcha/${encodeURIComponent(challengeId)}/cancel`, body, opts),
    /** T1 POST /:guildId/captcha/users/:userId/clear */
    usersClear: (userId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/captcha/users/${encodeURIComponent(userId)}/clear`, body, opts),
  } as const;
}
