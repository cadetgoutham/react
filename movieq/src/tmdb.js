export async function fetchTmdb(url) {
    const response = await fetch(url)

    if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
            throw new Error('Movie service authentication failed. Check the server TMDB_API_KEY.')
        }
        if (response.status === 429) {
            throw new Error('Too many movie requests. Please try again later.')
        }
        throw new Error(`Movie service request failed (HTTP ${response.status}). Check that the MovieQ API server is running.`)
    }

    if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('The movie API returned an unexpected response. Check that the MovieQ API server is running.')
    }

    return response.json()
}

export async function fetchMovieList(url) {
    const result = await fetchTmdb(url)
    if (
        !result
        || !Array.isArray(result.results)
        || !Number.isInteger(result.total_pages)
        || result.total_pages < 0
    ) {
        throw new Error('The movie service returned invalid movie data.')
    }
    return result
}
