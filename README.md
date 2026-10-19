# ConCat Docs

Source for [concat.app](https://concat.app): the ConCat marketing pages, user guides, and API reference. Built with [Docusaurus 3](https://docusaurus.io/).

## Requirements

- Node.js 26 (see `engines` in `package.json`)
- npm

## Development

```sh
npm install
npm start
```

This starts a local dev server and opens a browser window. Most changes are reflected live without restarting the server.

Guides live in `docs/guides/`, the API reference in `docs/api/`, and standalone pages (home, pricing, policies) in `src/pages/`.

## Configuration

The trial signup page (`/trial`) reads two environment variables at build time:

| Variable | Default | Purpose |
|---|---|---|
| `ONBOARDING_API_ORIGIN` | `https://onboarding.concat.app` | The form POSTs to `<origin>/api/signups` |
| `RECAPTCHA_SITE_KEY` | Google's test key in development; **none** in production builds | reCAPTCHA v2 checkbox site key |

A production build without `RECAPTCHA_SITE_KEY` replaces the form with a "temporarily unavailable" notice.

## Checks

CI runs these on every pull request:

```sh
npm run format:check   # Prettier (code, styles, JSON, YAML; not docs/)
npm run typecheck      # TypeScript
npm run build          # production build; fails on broken links
```

Run `npm run format` to fix formatting. To have `git blame` skip the bulk formatting commit:

```sh
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

## Deployment

The site is deployed with Cloudflare Pages. Pushes to `main` publish to production. Other branches get preview deployments with a "preview version" banner.
