const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const { rateLimit } = require('express-rate-limit')

const app = express()
const port = Number(process.env.PORT || 5001)
const tmdbApiKey = process.env.TMDB_API_KEY
console.log(`TMDB API Key: ${tmdbApiKey}`)
const buildDirectory = path.resolve(__dirname, '../build')
const indexFile = path.join(buildDirectory, 'index.html')
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

if (!tmdbApiKey) {
    console.error('TMDB_API_KEY is required to start the MovieQ server.')
    process.exit(1)
}

if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be a valid TCP port.')
}

if (process.env.TRUST_PROXY_HOPS !== undefined) {
    const trustProxyHops = Number(process.env.TRUST_PROXY_HOPS)
    if (!Number.isInteger(trustProxyHops) || trustProxyHops < 0) {
        throw new Error('TRUST_PROXY_HOPS must be a non-negative integer.')
    }
    if (trustProxyHops > 0) {
        app.set('trust proxy', trustProxyHops)
    }
}

const tmdbRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many movie requests. Please try again later.' }
})

app.use('/api/tmdb', tmdbRateLimit, async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Only GET requests are supported.' })
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
        const upstreamResponse = await fetch(upstreamUrl)
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

app.use(express.static(buildDirectory))

app.get(/.*/, (_req, res) => {
    if (!fs.existsSync(indexFile)) {
        return res.status(404).send('MovieQ build not found. Run npm run build first.')
    }
    return res.sendFile(indexFile)
})

app.listen(port, () => {
    console.log(`MovieQ server listening on port ${port}.`)
})
