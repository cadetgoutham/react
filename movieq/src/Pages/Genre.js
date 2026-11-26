import MovieBrowser from '../Components/MovieBrowser'

export default function Genre() {
    return (
        <MovieBrowser
            endpoint="discover/movie"
            eyebrow="Pick a mood, find a movie"
            title="Browse by genre"
            description="Explore the stories you love, or find something completely different."
            genreFilter
        />
    )
}
