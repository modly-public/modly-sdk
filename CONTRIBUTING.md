# Contributing to @modly/sdk

Thanks for helping! This SDK is a thin TypeScript wrapper over the Modly REST API. Most of the surface is **auto-generated** from the bot's route definitions, so contributions usually fall into one of three buckets:

1. **Add or fix a hand-rolled namespace** in `src/client.ts` (modules, webhooks, embeds, moderation, safety, customCommands, personas).
2. **Add a typed helper / response shape** in `src/types.ts`.
3. **Regenerate the auto-generated layer** in `src/generated/` after a bot route changes.

## Local setup

```bash
npm install
npm run typecheck
npm run build
```

There are no runtime tests in this repo — behavior is verified end-to-end against a staging Modly instance.

## Regenerating namespaces

Generated files come from `bot/scripts/generate-sdk.ts` (in the main Modly repo, not this submodule). If a route changes upstream:

1. Run the generator from the main repo.
2. Copy the regenerated `src/generated/<namespace>.ts` and updated `src/generated/index.ts` into this submodule.
3. Update [`src/generated/README.md`](./src/generated/README.md) if you added a new namespace.
4. Open a PR.

**Don't hand-edit `src/generated/*.ts`** — your changes will be wiped on the next regeneration.

## Conventions

- `strict: true` TypeScript. No `as any`. Files <600 lines.
- ESM-only, Node 20+. No CJS shim.
- Public methods take an optional final `opts?: RequestOptions` for `AbortSignal`.
- Namespace methods return decoded JSON, not the raw `Response`.
- Errors throw `ApiError` (see `src/errors.ts`).

## Filing issues

- **Missing endpoint?** Open an issue with the route path and a short use-case.
- **Type bug?** Include the request, the response you got, and the type you expected.
- **DX feedback?** We're listening — even small papercuts.

## Releasing

Maintainer-only. `npm version <patch|minor|major>` → `git push --follow-tags` → GitHub Actions publishes.

---

Last updated: 2026-04-30
