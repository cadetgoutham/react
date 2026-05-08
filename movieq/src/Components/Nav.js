import { useState, useContext } from 'react'
import { MdMobileOff, MdMobileFriendly } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import logo from '../images/moviefinder.png'
import API_KEY from './ApiKey';
import { UserContext } from '../App'
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const [searchmovie, setSearchMovie] = useState("")
    const { setMovieList, setTotalPages, setLoading, setError, page, moviegenre, activemobile, setActivemobile,
         setActivePage} = useContext(UserContext)
    const location = useLocation();

    const getData = async (keyword) => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&with_origin_country=IN&language=en-US&query=${searchmovie}&page=1&include_adult=true`
        if (keyword === ''){
            if (location.pathname === '/genre'){
                url = `https://api.themoviedb.org/3/discover/movie?with_genres=${moviegenre}&api_key=${API_KEY}&with_origin_country=IN&page=${page}`
            }
            else if(location.pathname === '/upcoming'){
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&with_origin_country=IN&language=en-US&page=${page}`
            }
            else if(location.pathname === '/trending'){
                url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&with_origin_country=IN&page=${page}`
            }
            else if(location.pathname === '/anime'){
                url = `https://api.themoviedb.org/3/discover/movie?with_genres=${moviegenre}&api_key=${API_KEY}&with_keywords=210024|287501&page=${page}`
            }
            else{
                url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&with_origin_country=IN&page=${page}`
            }
        }
        try {
            const response = await fetch(url);
            const result = await response.json();
            setMovieList(result.results);
            setTotalPages(result.total_pages)
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        setSearchMovie("")
    }


    const Navdata = [
        {
            id: 1,
            headername: "Home",
            Name: "Home",
            link: "/"
        },
        {
            id: 2,
            headername: "Genres",
            Name: "Genres",
            link: "/genre"
        },
        {
            id: 3,
            headername: "Trending Movies",
            Name: "Trending",
            link: "/trending"
        },
        {
            id: 4,
            headername: "Upcoming Movies",
            Name: "Upcoming",
            link: "/upcoming"
        },
        {
            id: 5,
            headername: "Anime",
            Name: "Anime",
            link: "/anime"
        }
    ]
    return (
        <>
            <button
                className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden"
                onClick={() => setActivemobile(!activemobile)}
            >
                {activemobile ? <MdMobileOff /> : <MdMobileFriendly />}
            </button>

            <nav
                className={`${activemobile ? 'block bg-slate-600 md:bg-slate-600 opacity-85' : 'hidden bg-black/100 md:bg-black/100'} fixed h-full w-full md:w-[20%] z-30 md:block top-0`}
            >

                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.4 }} >
                    <Link to="/" className={`${activemobile ? '' : ''} logo flex flex-col justify-center items-center m-7 gap-2`}
                        onClick={() => setActivemobile(!activemobile)}>
                        <img src={logo} alt="logo" className='w-24' />
                        <h1 className="text-gray-400/70 font-bold text-2xl text-center">movieQ</h1>
                    </Link>

                </motion.div>
                <ul className={`${activemobile ? '' : ''} text-white font-semibold text-[16px] text-center px-5`}>
                    {Navdata.map((data) => (
                        <Link key={data.id} to={data.link} onClick={() => { setActivePage(data.link) }}>
                            <li
                                className={`${location.pathname === data.link ? 'bg-blue-500 border-blue-600 text-black' : 'bg-gray-500/20 border-black'} p-2 my-2 rounded-[5px] border-2 hover:border-blue-600`} >
                                {data.Name}
                            </li>
                        </Link>
                    ))}

                </ul>
                <form className="px-5 mt-6 ">
                    <div className="">
                        <label htmlFor="first_name" className={`${activemobile ? 'dark:text-black' : 'text-white'} block mb-2 text-sm font-medium `}>
                            Search Movie
                        </label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            value={searchmovie}
                            onChange={(e) => { setSearchMovie(e.target.value) }}
                        />
                        <button
                            type="button"
                            onClick={() => {getData(searchmovie)}}
                            className={`${activemobile ? 'bg-blue-400' : 'bg-blue-700'} text-white  hover:bg-blue-800 w-full mt-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
                        >Search</button>
                    </div>
                </form>
            </nav>
        </>
    )
}
