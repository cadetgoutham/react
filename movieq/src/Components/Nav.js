import { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiCalendar, FiGrid, FiHome, FiMenu, FiPlay, FiSearch, FiTrendingUp, FiX } from 'react-icons/fi'
import logo from '../images/moviefinder.png'
import { UserContext } from '../App'

const Navdata = [
    { name: 'Home', link: '/', icon: FiHome },
    { name: 'Genres', link: '/genre', icon: FiGrid },
    { name: 'Trending', link: '/trending', icon: FiTrendingUp },
    { name: 'Upcoming', link: '/upcoming', icon: FiCalendar },
    { name: 'Anime', link: '/anime', icon: FiPlay }
]

export default function NavBar() {

    const [searchmovie, setSearchMovie] = useState('')
    const { activemobile, setActivemobile } = useContext(UserContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSearch = (event) => {
        event.preventDefault()
        const query = searchmovie.trim()
        const pathname = Navdata.some(({ link }) => link === location.pathname) ? location.pathname : '/'
        navigate({ pathname, search: query ? `?${new URLSearchParams({ query })}` : '' })
        setSearchMovie('')
        setActivemobile(false)
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
