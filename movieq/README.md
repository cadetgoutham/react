# MovieQ

MovieQ is a React movie browser backed by a small Express server. The server proxies TMDB requests so the TMDB API key is never sent to the browser.

## Configure the TMDB key

The key that was previously in frontend source should be considered exposed. Revoke or rotate it in your TMDB account before deploying this version.

For local development, copy `.env.example` to `.env` and set `TMDB_API_KEY` to the rotated key. Keep the key server-side: do not add a `REACT_APP_` prefix, commit `.env`, or put the key in frontend code.

## Local development

Requires Node.js 18 or newer.

1. Install dependencies with `npm install`.
2. Create and configure `.env` as described above.
3. In one terminal, run `npm run server`.
4. In another terminal, run `npm start`.

The React development server proxies `/api/tmdb` requests to Express on port 5001.

If movies do not load, check that the actual `.env` file (not just `.env.example`) contains `TMDB_API_KEY` and that `npm run server` is running. Restart the React development server after changing its proxy configuration, and restart Express after changing `.env`. Failed requests appear as an error on the movie listing rather than an endless loader.

## Production

Set `TMDB_API_KEY` in the hosting provider's server-side environment configuration. Build the React app with `npm run build`, then start the Express server with `npm run server`. The server serves both the built app and the TMDB proxy.

The proxy allows only the TMDB endpoints MovieQ uses and limits each client to 100 requests per 15 minutes. If the host sits behind a reverse proxy, set `TRUST_PROXY_HOPS` to the number of trusted proxy hops reported by that host.
