import MovieBrowser from '../Components/MovieBrowser'

export default function Upcoming() {
    return (
        <MovieBrowser
            endpoint="movie/upcoming"
            eyebrow="Coming soon to your screen"
            title="Upcoming movies"
            description="Get a first look at the stories arriving soon."
        />
    )
}
