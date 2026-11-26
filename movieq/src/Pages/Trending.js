import MovieBrowser from '../Components/MovieBrowser'

export default function Trending() {
    return (
        <MovieBrowser
            endpoint="trending/movie/day"
            eyebrow="What everyone is watching"
            title="Trending movies"
            description="The movies making waves today. Find your next must-watch."
        />
    )
}
