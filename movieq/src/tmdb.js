export async function fetchTmdb(endpoint, parameters = {}, signal) {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY?.trim()
    console.log('API Key:', apiKey)
    if (!apiKey) {
        throw new Error('REACT_APP_TMDB_API_KEY is missing. Set it in your environment and restart the app or rebuild.')
    }

    const query = new URLSearchParams(parameters)
    query.set('api_key', apiKey)
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?${query}`, { signal })

    if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('The movie service returned an unexpected response. Please try again.')
    }
    const payload = await response.json()
    if (!response.ok) {
        throw new Error(payload.status_message || `Movie request failed (HTTP ${response.status}). Please try again.`)
    }
    return payload
}

export async function fetchMovieList(endpoint, parameters, signal) {
    const payload = await fetchTmdb(endpoint, parameters, signal)
    if (
        !payload
        || !Array.isArray(payload.results)
        || !payload.results.every((movie) => movie && Number.isInteger(movie.id) && movie.id > 0)
        || !Number.isInteger(payload.total_pages)
        || payload.total_pages < 0
    ) {
        throw new Error('The movie service returned invalid movie data.')
    }
    return { ...payload, total_pages: Math.min(payload.total_pages, 500) }
}