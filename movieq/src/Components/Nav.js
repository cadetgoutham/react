import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiCalendar, FiGrid, FiHome, FiMenu, FiPlay, FiSearch, FiTrendingUp, FiX } from 'react-icons/fi'
import logo from '../images/moviefinder.png'
import { UserContext } from '../App'
import { fetchMovieList } from '../tmdb'

const Navdata = [
    { name: 'Home', link: '/', icon: FiHome },
    { name: 'Genres', link: '/genre', icon: FiGrid },
    { name: 'Trending', link: '/trending', icon: FiTrendingUp },
    { name: 'Upcoming', link: '/upcoming', icon: FiCalendar },
    { name: 'Anime', link: '/anime', icon: FiPlay }
]

export default function NavBar() {
    const [searchmovie, setSearchMovie] = useState('')
    const {
        setMovieList, setTotalPages, setLoading, setError, page, moviegenre,
        activemobile, setActivemobile, setActivePage
    } = useContext(UserContext)
    const location = useLocation()

    const getData = async (keyword) => {
        setLoading(true)
        setError(null)
        let url = `/api/tmdb/search/movie?with_origin_country=IN&language=en-US&query=${encodeURIComponent(keyword)}&page=1&include_adult=true`
        if (keyword === '') {
            if (location.pathname === '/genre') {
                url = `/api/tmdb/discover/movie?with_genres=${moviegenre}&with_origin_country=IN&page=${page}`
            } else if (location.pathname === '/upcoming') {
                url = `/api/tmdb/movie/upcoming?with_origin_country=IN&language=en-US&page=${page}`
            } else if (location.pathname === '/trending') {
                url = `/api/tmdb/trending/movie/day?with_origin_country=IN&page=${page}`
            } else if (location.pathname === '/anime') {
                url = `/api/tmdb/discover/movie?with_genres=${moviegenre}&with_keywords=210024%7C287501&page=${page}`
            } else {
                url = `/api/tmdb/trending/movie/day?with_origin_country=IN&page=${page}`
            }
        }

        try {
            const result = await fetchMovieList(url)
            setMovieList(result.results)
            setTotalPages(result.total_pages)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
        setSearchMovie('')
        setActivemobile(false)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        getData(searchmovie.trim())
    }

    return (
        <>
            {activemobile && (
                <button
                    className="sidebar-backdrop"
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setActivemobile(false)}
                />
            )}
            <button
                className="mobile-menu-toggle"
                type="button"
                aria-label={activemobile ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={activemobile}
                onClick={() => setActivemobile(!activemobile)}
            >
                {activemobile ? <FiX /> : <FiMenu />}
            </button>

            <nav className={`movie-sidebar${activemobile ? ' is-open' : ''}`} aria-label="Main navigation">
                <Link
                    to="/"
                    className="movie-brand"
                    onClick={() => {
                        setActivePage('/')
                        setActivemobile(false)
                    }}
                >
                    <span className="movie-brand__mark"><img src={logo} alt="" /></span>
                    <span className="movie-brand__name">movie<span>Q</span></span>
                </Link>

                <p className="sidebar-label">Discover</p>
                <ul className="movie-nav">
                    {Navdata.map(({ name, link, icon: Icon }) => (
                        <li key={link}>
                            <Link
                                to={link}
                                className={location.pathname === link ? 'active' : ''}
                                aria-current={location.pathname === link ? 'page' : undefined}
                                onClick={() => {
                                    setActivePage(link)
                                    setActivemobile(false)
                                }}
                            >
                                <span className="movie-nav__icon"><Icon /></span>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <form className="movie-search" onSubmit={handleSearch}>
                    <label htmlFor="movie-search-input">Find a movie</label>
                    <div className="movie-search__field">
                        <FiSearch aria-hidden="true" />
                        <input
                            id="movie-search-input"
                            type="search"
                            placeholder="Search titles..."
                            value={searchmovie}
                            onChange={(event) => setSearchMovie(event.target.value)}
                        />
                    </div>
                    <button className="movie-search__submit" type="submit">
                        <FiSearch aria-hidden="true" />
                        Search movies
                    </button>
                </form>

                <p className="sidebar-footnote">
                    Your next favorite film is just around the corner.
                </p>
            </nav>
        </>
    )
}
