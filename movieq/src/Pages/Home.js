import MovieBrowser from '../Components/MovieBrowser'

export default function Home() {
    return (
        <MovieBrowser
            endpoint="trending/movie/day"
            eyebrow="Your daily dose of cinema"
            title="Trending now"
            description="Fresh picks and audience favorites, all in one place."
        />
    )
}
