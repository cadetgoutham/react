import image from '../images/Brown Mystery Movie Poster .png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Loader from './Loader'

export default function MovieCard({ genreList, loading, error }) {
    if (loading) {
        return <div className="loading-state"><Loader /></div>
    }

    if (error) {
        return <p className="request-error" role="alert">{error.message}</p>
    }

    if (!genreList.length) {
        return <p className="empty-state" role="status">No matching movies found. Try another search or category.</p>
    }

    return (
        <div className="movie-grid">
            {genreList.map((movie) => {
                const title = movie.title || movie.name || 'Untitled movie'
                const score = Number(movie.vote_average)
                const year = movie.release_date?.slice(0, 4)

                return (
                    <article className="movie-card" key={movie.id}>
                        {movie.poster_path ? (
                            <LazyLoadImage
                                effect="blur"
                                className="movie-poster-image"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`${title} movie poster`}
                                onError={({ currentTarget }) => {
                                    if (currentTarget.getAttribute('src') !== image) {
                                        currentTarget.src = image
                                        currentTarget.alt = 'Movie poster unavailable'
                                    }
                                }}
                            />
                        ) : (
                            <img className="movie-poster-image" src={image} alt="Movie poster unavailable" />
                        )}
                        <Link to={`/moviedetail/${movie.id}`} className="movie-card__link" aria-label={`View ${title}`}>
                            <span className="movie-card__shade" aria-hidden="true" />
                            <span className="movie-card__info">
                                <span>
                                    <span className="movie-card__title">{title}</span>
                                    {year && <span className="movie-card__year">{year}</span>}
                                </span>
                                {Number.isFinite(score) && score > 0 && (
                                    <span className="movie-card__score" aria-label={`Rating ${score.toFixed(1)} out of 10`}>
                                        ★ {score.toFixed(1)}
                                    </span>
                                )}
                            </span>
                        </Link>
                    </article>
                )
            })}
        </div>
    )
}
