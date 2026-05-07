# Quickstart — three end-to-end examples

These three flows cover the most common reasons people install the SDK. Each is self-contained — copy, paste, fill in IDs.

## Setup

```ts
import { ModlyClient } from "@modly/sdk";

const modly = new ModlyClient({
  guildId: process.env.MODLY_GUILD_ID!,
  apiKey: process.env.MODLY_API_KEY!,  // modly_pat_...
});
```

## 1. List moderation cases for a user

```ts
const cases = await modly.moderation.listCases({
  userId: "987654321098765432",
  limit: 50,
});

for (const c of cases) {
  console.log(`#${c.id} ${c.action} by ${c.moderatorId} — ${c.reason ?? "(no reason)"}`);
}
```

Common follow-ups:

- Filter `cases.filter(c => c.action === "ban")` for a strikes-only view.
- Pair with `modly.memberNotes.list({ userId })` to merge moderator-only context.

## 2. Send a webhook broadcast

```ts
// One-time setup: list your saved webhook targets
const targets = await modly.webhooks.listTargets();
console.log(targets.map(t => `${t.name} → ${t.id}`));

// Save a reusable embed template
await modly.embeds.save("release-notes", {
  content: "🚀 **v0.4.0 is live**",
  embeds: [
    {
      title: "What's new",
      color: 0x7c3aed,
      description: "Forms 2.0, faster automod, dark mode for the dashboard.",
      fields: [
        { name: "Highlights", value: "• Forms\n• Speed\n• Dark mode", inline: false },
      ],
    },
  ],
});

// Broadcast it
const results = await modly.webhooks.sendNow({
  targetIds: targets.filter(t => t.tags?.includes("announce")).map(t => t.id),
  embedTemplateName: "release-notes",
});

console.log(`Delivered to ${results.length} targets`);
```

For ad-hoc one-shot sends without saving a template, pass `inline: { content, embeds }` instead of `embedTemplateName`.

## 3. Create a custom command

```ts
await modly.customCommands.save({
  name: "rules",
  triggerMode: "slash",      // slash | prefix | both
  responseMode: "embed",     // text | embed | action
  body: {
    embeds: [
      {
        title: "Server rules",
        color: 0x10b981,
        description: "Be kind. No spam. Listen to staff.",
        fields: [
          { name: "Full rules", value: "<#123456789012345678>" },
        ],
      },
    ],
  },
});

// Verify
const all = await modly.customCommands.list();
console.log(all.find(c => c.name === "rules"));
```

To export your full custom-command set (e.g. to commit to a recipes repo):

```ts
const dump = await modly.customCommands.export();
await fs.writeFile("commands.json", JSON.stringify(dump, null, 2));
```

…and to import on another server:

```ts
const file = JSON.parse(await fs.readFile("commands.json", "utf8"));
await modly.customCommands.import(file.commands);
```

## Error handling

Every method throws `ApiError` on non-2xx responses:

```ts
import { ApiError } from "@modly/sdk";

try {
  await modly.embeds.save("bad name", { content: "" });
} catch (err) {
  if (err instanceof ApiError) {
    console.error(`status=${err.status} code=${err.code}`, err.body);
  }
  throw err;
}
```

`AbortSignal` is supported on every method via the `opts` param: `await modly.cases.list({ signal: ac.signal })`.

---

Last updated: 2026-04-30
