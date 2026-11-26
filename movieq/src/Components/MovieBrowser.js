import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { UserContext } from '../App'
import { fetchMovieList } from '../tmdb'
import genres from '../genre'
import Btn from './Btn'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

export default function MovieBrowser({ endpoint, eyebrow, title, description, genreFilter = false, anime = false }) {
    const { moviegenre, setMovieGenre } = useContext(UserContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')?.trim() || ''
    const requestedPage = Number(searchParams.get('page') || 1)
    const page = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= 500 ? requestedPage : 1
    const [result, setResult] = useState({ results: [], total_pages: 0 })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        const parameters = { page, language: 'en-US' }
        if (query) {
            parameters.query = query
            parameters.include_adult = true
        } else {
            parameters.with_origin_country = 'IN'
            if (genreFilter || anime) parameters.with_genres = moviegenre
            if (anime) {
                parameters.with_keywords = '210024|287501'
                delete parameters.with_origin_country
            }
        }
        setLoading(true)
        setError(null)
        fetchMovieList(query ? 'search/movie' : endpoint, parameters, controller.signal)
            .then((movies) => {
                if (!controller.signal.aborted) setResult(movies)
            })
            .catch((requestError) => {
                if (!controller.signal.aborted) setError(requestError)
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false)
            })
        return () => controller.abort()
    }, [endpoint, genreFilter, anime, moviegenre, page, query, attempt])

    const changePage = (nextPage) => {
        if (nextPage < 1 || nextPage > result.total_pages) return
        const next = new URLSearchParams(searchParams)
        next.set('page', nextPage)
        setSearchParams(next)
        window.scrollTo(0, 0)
    }

    const changeGenre = (genre) => {
        setMovieGenre(genre)
        setSearchParams({})
    }

    return (
        <main className="page-content">
            <header className="page-heading">
                <p className="page-heading__eyebrow">{query ? 'Find your next favorite' : eyebrow}</p>
                <h1>{query ? `Results for "${query}"` : title}</h1>
                <p>{query ? 'Explore movies matching your search.' : description}</p>
            </header>
            {genreFilter && (
                <div className="genre-panel" aria-label="Movie genres">
                    {genres.map((genre) => (
                        <Btn
                            key={genre.id}
                            id={genre.id}
                            item={genre.name}
                            setMovieGenre={changeGenre}
                            genre={genre.id}
                            moviegenre={moviegenre}
                        />
                    ))}
                </div>
            )}
            <MovieCard genreList={result.results} loading={loading} error={error} />
            {error && !loading && (
                <button className="genre-chip" type="button" onClick={() => setAttempt(attempt + 1)}>Try again</button>
            )}
            {!loading && !error && result.results.length > 0 && (
                <Pagination totalPages={result.total_pages} currentPage={page} onPageChange={changePage} />
            )}
        </main>
    )
}
