# @modly/sdk

Typed TypeScript client for the [Modly](https://modly.net) Discord bot REST API.

```bash
npm i @modly/sdk
```

## Quick start

```ts
import { ModlyClient } from "@modly/sdk";

const modly = new ModlyClient({
  guildId: "1234567890",
  apiKey:  process.env.MODLY_API_KEY!,
});

// List saved webhook targets in this guild
const targets = await modly.webhooks.listTargets();

// Save an embed template
await modly.embeds.save("weekly-update", {
  content: "📰 Weekly digest",
  embeds: [
    {
      title: "What shipped this week",
      color: 0x7c3aed,
      description: "Highlights from the team — full notes in <#1234>.",
    },
  ],
});

// Broadcast it to a target
await modly.webhooks.sendNow({
  targetIds: [targets[0]!.id],
  embedTemplateName: "weekly-update",
});

// Inspect the module catalog and a live schema
const modules = await modly.modules.list();
const automodSchema = await modly.modules.schema("automod");
```

## API keys

Generate a personal access token in the dashboard at **Account Settings → API tokens**. The token grants the same access as your dashboard session — guild-level authorization happens server-side based on the `guildId` you scope each request to. Tokens look like `modly_pat_…`.

## Coverage

The SDK currently wraps the most-used public surface area:

- **Modules** — list the published module catalog, fetch a module schema
- **Webhooks** — list targets/groups/schedules, send-now broadcasts
- **Outbound webhooks** — list, preview, create, update, test, replay, delete
- **Embeds** — list/save/delete templates, duplicate, version history, restore, send to channel
- **Custom commands** — overview, list, save, preview, import, export, delete
- **Personas** — list presets + own personas, create/update/delete both flows
- **Moderation** — list cases for a guild
- **Safety** — list and resolve evader detections

The SDK stays hand-curated for stability. If you need an endpoint that's not covered, open an issue or PR and we’ll add it to the public client.

## Compatibility

- Node 20+ (uses global `fetch`)
- Works in edge runtimes (Vercel, Cloudflare Workers, Deno) — pass a custom `fetch` if needed
- ESM-only

## License

MIT.
