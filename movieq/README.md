# MovieQ

A static React movie browser that requests TMDB data directly from the browser.

## Requirements

- Node.js 22 or newer (Netlify builds use Node.js 22).
- A TMDB API key.

## Local development

1. Run `npm ci` in this directory.
2. Copy `.env.example` to `.env` and set `REACT_APP_TMDB_API_KEY` to your TMDB API key.
3. Run `npm start`.
4. Open `http://localhost:3000`.

Restart the React development server after environment variable changes.
No API server or Netlify function is required.

`REACT_APP_TMDB_API_KEY` is embedded in the public browser bundle at build time and
visible in network requests. This setup cannot keep the key secret. Never use
private credentials in a React environment variable. Do not commit `.env` or
hardcode a key in source files.

## Validation

Run these commands from this directory:

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

Tests mock TMDB requests and require no live credentials. The app uses Create
React App; a future build-tool migration should be evaluated separately.

## Netlify deployment

Connect this repository to Netlify and use the root `netlify.toml`. It sets:

- Base directory: `movieq`
- Build command: `npm run build`
- Publish directory: `build`

Set `REACT_APP_TMDB_API_KEY` in Netlify environment variables with **Builds** scope
for every deployment context you use, then rebuild and redeploy. A runtime-only
variable will not update the compiled app. Remove the old `REACT_APP_TMDB_API_KEY` setting.
The root configuration includes a fallback for direct React Router URLs.

Before going live, verify movie search, pagination, genres, detail pages, and
direct route refreshes on a Netlify deploy preview. Review dependency
advisories and your TMDB licensing/attribution obligations before launch.

The UI shows a loader while requests are pending, an actionable error on
failure, and a message when a completed search has no matches.
