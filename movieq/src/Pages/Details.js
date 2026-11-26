import { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaPlay } from 'react-icons/fa'
import { HiChevronLeft } from 'react-icons/hi'
import { UserContext } from '../App'
import { fetchTmdb } from '../tmdb'
import image from '../images/Brown Mystery Movie Poster .png'
import men from '../images/men.jpeg'
import women from '../images/women.png'
import Loader from '../Components/Loader'

function People({ title, people }) {
    if (!people.length) return null

    return (
        <section className="people-section" aria-label={title}>
            <h2>{title}</h2>
            <div className="people-list">
                {people.map((person) => (
                    <article className="cast-card" key={`${person.id}-${person.credit_id || person.job || person.character}`}>
                        <LazyLoadImage
                            effect="blur"
                            src={person.profile_path ? `https://image.tmdb.org/t/p/w185${person.profile_path}` : person.gender === 1 ? women : men}
                            alt={person.name}
                            className="rounded-xl"
                        />
                        <p>{person.name}</p>
                        <p>{person.character || person.job}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default function Details() {
    const { setMovieGenre } = useContext(UserContext)
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState({ cast: [], crew: [] })
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        setError(null)
        Promise.all([
            fetchTmdb(`movie/${id}`, { language: 'en-US' }, controller.signal),
            fetchTmdb(`movie/${id}/credits`, { language: 'en-US' }, controller.signal),
            fetchTmdb(`movie/${id}/videos`, { language: 'en-US' }, controller.signal)
        ]).then(([details, people, trailers]) => {
            if (!details?.id || !Array.isArray(details.genres) || !Array.isArray(people?.cast) || !Array.isArray(people?.crew) || !Array.isArray(trailers?.results)) {
                throw new Error('The movie service returned invalid movie details.')
            }
            if (!controller.signal.aborted) {
                setMovie(details)
                setCredits(people)
                setVideos(trailers.results)
            }
        }).catch((requestError) => {
            if (!controller.signal.aborted) setError(requestError)
        }).finally(() => {
            if (!controller.signal.aborted) setLoading(false)
        })
        return () => controller.abort()
    }, [id, attempt])

    if (loading) {
        return <main className="page-content"><div className="loading-state"><Loader /></div></main>
    }

    if (error) {
        return (
            <main className="page-content">
                <p className="request-error" role="alert">{error.message}</p>
                <button className="genre-chip" onClick={() => setAttempt(attempt + 1)}>Try again</button>
                <Link className="detail-back" to="/">Back to movies</Link>
            </main>
        )
    }

    const trailers = videos.filter((video) => video.site === 'YouTube' && video.type === 'Trailer')
    const runtime = movie.runtime > 0 ? `${Math.floor(movie.runtime / 60)}hr ${movie.runtime % 60}m` : 'Not available'

    return (
        <main className="page-content movie-details-page">
            <Link className="detail-back" to="/"><HiChevronLeft aria-hidden="true" /> Back to movies</Link>
            <div className="flex movie-details">
                <div className="w-3/6">
                    <img
                        src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : image}
                        alt={`${movie.title} backdrop`}
                        className="w-full"
                    />
                </div>
                <div className="w-3/6">
                    <header className="page-heading"><h1>{movie.title}</h1></header>
                    <dl className="detail-facts">
                        <div>
                            <dt>Genre</dt>
                            <dd className="genre-panel">
                                {movie.genres.map((genre) => (
                                    <Link key={genre.id} to="/genre" className="genre-chip" onClick={() => setMovieGenre(genre.id)}>
                                        {genre.name}
                                    </Link>
                                ))}
                            </dd>
                        </div>
                        <div><dt>Release date</dt><dd>{movie.release_date || 'Not announced'}</dd></div>
                        <div><dt>Run time</dt><dd>{runtime}</dd></div>
                        <div><dt>Plot</dt><dd>{movie.overview || 'No overview available yet.'}</dd></div>
                    </dl>
                </div>
            </div>
            <People title="Cast" people={credits.cast} />
            <People title="Crew" people={credits.crew} />
            {trailers.length > 0 && (
                <div className="trailer-links">
                    {trailers.map((trailer, index) => (
                        <a key={trailer.id} className="genre-chip" href={`https://www.youtube.com/watch?v=${encodeURIComponent(trailer.key)}`} target="_blank" rel="noopener noreferrer">
                            <FaPlay aria-hidden="true" /> Watch trailer{trailers.length > 1 ? ` ${index + 1}` : ''}
                        </a>
                    ))}
                </div>
            )}
        </main>
    )
}
