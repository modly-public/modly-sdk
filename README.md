# @modly/sdk

> Modly is the all-in-one Discord moderation bot — this is the official **TypeScript SDK** for its REST API. Use it from Node 20+, edge runtimes, or any other JS host to programmatically drive automod rules, embeds, webhooks, custom commands, moderation cases, forms, and the rest of the public guild surface.

- Bot: <https://modly.net>
- Issues: <https://github.com/modly-public/modly-sdk/issues>
- License: [MIT](./LICENSE)

## Install

```bash
npm install @modly/sdk
```

## Run without npm registry

The npm package isn't published yet — install straight from GitHub instead:

```bash
npm install github:modly-public/modly-sdk
```

…or clone the repo and import locally:

```bash
git clone https://github.com/modly-public/modly-sdk.git
cd modly-sdk && npm install && npm run build
```

The `prepare` script auto-runs `npm run build` on git-URL installs, so `dist/` is populated even though it's gitignored.

## Quickstart

```ts
import { ModlyClient } from "@modly/sdk";

const modly = new ModlyClient({
  guildId: "1234567890",
  apiKey: process.env.MODLY_API_KEY!, // modly_pat_...
});

// 1. List moderation cases
const cases = await modly.moderation.listCases({ limit: 25 });

// 2. Save and broadcast an embed
await modly.embeds.save("weekly-update", {
  content: "📰 Weekly digest",
  embeds: [{ title: "What shipped", color: 0x7c3aed }],
});

const targets = await modly.webhooks.listTargets();
await modly.webhooks.sendNow({
  targetIds: [targets[0]!.id],
  embedTemplateName: "weekly-update",
});

// 3. Create a custom command
await modly.customCommands.save({
  name: "rules",
  triggerMode: "slash",
  responseMode: "embed",
  body: { embeds: [{ title: "Rules", description: "Be kind." }] },
});
```

Three end-to-end walkthroughs live in [`docs/quickstart.md`](./docs/quickstart.md).

## Authentication

Generate a personal access token in the dashboard at **Account Settings → API tokens**. Tokens look like `modly_pat_...` and are sent on every request as `Authorization: Bearer <token>`. Each token is bound to your dashboard session's permissions; the `guildId` you pass on the client decides which guild every call targets.

If you self-host Modly on a different origin, pass `baseUrl`:

```ts
new ModlyClient({ guildId, apiKey, baseUrl: "https://modly.example.com" });
```

## Directory map

```
modly-sdk/
├── src/
│   ├── client.ts           # ModlyClient — transport + hand-rolled namespaces
│   ├── index.ts            # public entry point (re-exports)
│   ├── errors.ts           # ApiError shape
│   ├── types.ts            # shared response/request types
│   └── generated/          # 70+ auto-generated route namespaces
├── dist/                   # compiled output (published to npm)
├── docs/
│   └── quickstart.md       # three end-to-end examples
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md               # you are here
```

| Top-level path | What's in it |
|---|---|
| [`src/`](./src) | Client source. Hand-curated transport + ~70 generated namespace attachers. |
| [`src/generated/`](./src/generated) | Auto-generated namespace files — one per bot route file. See the [namespace index](./src/generated/README.md). |
| [`docs/`](./docs) | Hand-written walkthroughs and recipes. |
| `dist/` | TypeScript build output. Don't edit. |

## Coverage

The 70+ generated namespaces cover every public bot route. Seven namespaces (`modules`, `webhooks`, `embeds`, `moderation`, `safety`, `customCommands`, `personas`) ship richer hand-typed responses on top of the generated layer for ergonomics. See [`src/generated/README.md`](./src/generated/README.md) for the full namespace list with descriptions.

## Compatibility

- **Node 20+** (uses global `fetch`)
- **Edge runtimes**: Vercel, Cloudflare Workers, Deno — pass a custom `fetch` if needed
- **ESM-only**

## Contributing

Pull requests welcome. See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the auto-generation workflow and conventions. Open an [issue](https://github.com/modly-public/modly-sdk/issues) for missing endpoints, type bugs, or DX requests.

## License

MIT — see [`LICENSE`](./LICENSE).

---

Built with ❤ for [Modly](https://modly.net).

Last updated: 2026-04-30
