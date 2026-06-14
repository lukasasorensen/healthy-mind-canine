# Healthy Mind Canine React App

This folder contains a standalone Vite + React version of the Healthy Mind Canine marketing site. It is intentionally isolated from the existing Vue app under `client/app` so the React migration can proceed incrementally without changing the current production frontend in place.

## Run locally

```bash
cd react-app
npm install
npm run dev
```

## Build

```bash
cd react-app
npm run build
```

## Lint

```bash
cd react-app
npm run lint
```

## Notes

- The app uses `HashRouter` so it can mirror the current route structure without requiring root server changes.
- Marketing assets used by the React app live in `react-app/public/assets` to keep this app self-contained.
- SEO/social metadata and the existing Google Analytics / Google Ads snippets are preserved in `react-app/index.html`, with route-specific titles and descriptions updated in React.
