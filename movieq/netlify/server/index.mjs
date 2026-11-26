import express from 'express'
import { rateLimit, ipKeyGenerator } from 'express-rate-limit'
import { getContext } from '@netlify/server'

// Netlify Server: proxies TMDB requests so the API key stays server-side.
// The React build itself is served as static files by Netlify.
export const config = { path: '/api/*' }

const app = express()
const tmdbApiBaseUrl = 'https://api.themoviedb.org/3/'
const allowedEndpoints = /^(?:search\/movie|discover\/movie|movie\/upcoming|trending\/movie\/day|movie\/\d+(?:\/(?:credits|videos))?)$/
const allowedQueryParameters = new Set([
    'include_adult',
    'language',
    'page',
    'query',
    'with_genres',
    'with_keywords',
    'with_origin_country'
])

const tmdbRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
    // Use the real client IP that Netlify reports for this request.
    keyGenerator: (req) => ipKeyGenerator(getContext().ip || req.ip || ''),
    validate: { xForwardedForHeader: false },
    message: { error: 'Too many movie requests. Please try again later.' }
})

app.use('/api/tmdb', tmdbRateLimit, async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Only GET requests are supported.' })
    }

    const tmdbApiKey = process.env.TMDB_API_KEY
    if (!tmdbApiKey) {
        console.error('TMDB_API_KEY is not set for this site.')
        return res.status(500).json({ error: 'The movie service is not configured.' })
    }

    const endpoint = req.path.replace(/^\/+/, '')
    if (!allowedEndpoints.test(endpoint)) {
        return res.status(404).json({ error: 'TMDB endpoint is not available.' })
    }

    const upstreamUrl = new URL(endpoint, tmdbApiBaseUrl)
    for (const [name, value] of Object.entries(req.query)) {
        if (
            !allowedQueryParameters.has(name)
            || typeof value !== 'string'
            || value.length > 2000
        ) {
            return res.status(400).json({ error: 'Invalid TMDB query parameters.' })
        }

        if (
            name === 'page'
            && (!/^\d+$/.test(value) || Number(value) < 1 || Number(value) > 500)
        ) {
            return res.status(400).json({ error: 'Page must be between 1 and 500.' })
        }

        upstreamUrl.searchParams.set(name, value)
    }

    upstreamUrl.searchParams.set('api_key', tmdbApiKey)

    try {
        const upstreamResponse = await fetch(upstreamUrl, { signal: AbortSignal.timeout(15000) })
        const payload = await upstreamResponse.json()
        return res.status(upstreamResponse.status).json(payload)
    } catch (error) {
        console.error('TMDB upstream request failed:', error.name || 'Error')
        return res.status(502).json({ error: 'The movie service is temporarily unavailable.' })
    }
})

app.use('/api', (_req, res) => {
    res.status(404).json({ error: 'API route not found.' })
})

app.listen(process.env.PORT || 5001)
