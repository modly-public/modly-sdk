# `src/` — SDK source

This folder is the published SDK. Everything else in the repo (`dist/`, `docs/`) is build output or hand-written documentation.

## Layout

| File / folder | Purpose |
|---|---|
| [`index.ts`](./index.ts) | Public entry point. Re-exports `ModlyClient`, `ApiError`, all types, and every generated attacher. |
| [`client.ts`](./client.ts) | The `ModlyClient` class — HTTP transport, auth header, and the seven hand-rolled namespaces (`modules`, `webhooks`, `embeds`, `moderation`, `safety`, `customCommands`, `personas`). |
| [`errors.ts`](./errors.ts) | `ApiError` class shape thrown on non-2xx responses. |
| [`types.ts`](./types.ts) | Hand-curated request/response types referenced by the client. |
| [`generated/`](./generated) | 70+ auto-generated namespace files — see its [README](./generated/README.md). |

## Usage

```ts
import { ModlyClient } from "@modly_public/sdk";

const modly = new ModlyClient({
  guildId: "1234567890",
  apiKey: process.env.MODLY_API_KEY!,
});

await modly.embeds.list();             // hand-rolled namespace
await modly.automod.listRules();       // generated namespace
```

## Hand-rolled vs generated

The seven hand-rolled namespaces (`modules`, `webhooks`, `embeds`, `moderation`, `safety`, `customCommands`, `personas`) ship richer typed responses — they unpack `{ rules: [] }` envelopes, expose typed unions, etc. The generator deliberately **skips** these names so they don't shadow the hand-curated versions.

If you add a new hand-rolled namespace:

1. Skip it in `bot/scripts/generate-sdk.ts`'s exclusion list.
2. Delete the now-stale generated file.
3. Implement on `ModlyClient` and update [`src/generated/README.md`](./generated/README.md) if appropriate.

---

Last updated: 2026-04-30
