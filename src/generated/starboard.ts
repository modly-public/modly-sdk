// AUTO-GENERATED — do not edit. Regenerate via `npm run generate:sdk`.
import type { ModlyClient, RequestOptions } from "../client.js";

export function attachStarboard(client: ModlyClient) {
  return {
    /** T1 GET /:guildId/starboard */
    get: (opts?: RequestOptions) =>
      client._request("GET", `/starboard`, undefined, opts),
    /** T1 POST /:guildId/starboard/boards */
    boards: (body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/starboard/boards`, body, opts),
    /** T1 DELETE /:guildId/starboard/boards/:boardId */
    deleteBoards: (boardId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/starboard/boards/${encodeURIComponent(boardId)}`, undefined, opts),
    /** T1 GET /:guildId/starboard/posts */
    listPosts: (opts?: RequestOptions) =>
      client._request("GET", `/starboard/posts`, undefined, opts),
    /** T1 POST /:guildId/starboard/posts/:postId/actions */
    postsActions: (postId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/starboard/posts/${encodeURIComponent(postId)}/actions`, body, opts),
    /** T1 POST /:guildId/starboard/boards/:boardId/rewards */
    boardsRewards: (boardId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/starboard/boards/${encodeURIComponent(boardId)}/rewards`, body, opts),
    /** T1 DELETE /:guildId/starboard/boards/:boardId/rewards/:rewardId */
    deleteBoardsRewards: (boardId: string, rewardId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/starboard/boards/${encodeURIComponent(boardId)}/rewards/${encodeURIComponent(rewardId)}`, undefined, opts),
    /** T1 POST /:guildId/starboard/boards/:boardId/overrides */
    boardsOverrides: (boardId: string, body: Record<string, unknown>, opts?: RequestOptions) =>
      client._request("POST", `/starboard/boards/${encodeURIComponent(boardId)}/overrides`, body, opts),
    /** T1 DELETE /:guildId/starboard/boards/:boardId/overrides/:overrideId */
    deleteBoardsOverrides: (boardId: string, overrideId: string, opts?: RequestOptions) =>
      client._request("DELETE", `/starboard/boards/${encodeURIComponent(boardId)}/overrides/${encodeURIComponent(overrideId)}`, undefined, opts),
    /** T1 GET /:guildId/starboard/diagnostics */
    listDiagnostics: (opts?: RequestOptions) =>
      client._request("GET", `/starboard/diagnostics`, undefined, opts),
  } as const;
}
