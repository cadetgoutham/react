import MovieBrowser from '../Components/MovieBrowser'

export default function Anime() {
    return (
        <MovieBrowser
            endpoint="discover/movie"
            eyebrow="Animation from around the world"
            title="Anime movies"
            description="Discover animated adventures, from beloved classics to new favorites."
            anime
        />
    )
}
