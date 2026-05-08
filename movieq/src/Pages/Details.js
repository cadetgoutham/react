import React, { useEffect, useState, useContext } from 'react'
import API_KEY from '../Components/ApiKey'
import image from '../images/Brown Mystery Movie Poster .png'
import men from '../images/men.jpeg'
import women from '../images/women.png'
import { UserContext } from '../App'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaPlay } from 'react-icons/fa';
import { HiChevronLeft } from "react-icons/hi";
import Loader from '../Components/Loader';

export default function Details() {
    const { loading, setLoading, setMovieGenre } = useContext(UserContext)

    const [movieDetails, setMoviedetails] = useState([]);
    const [castDetails, setCastDetails] = useState([]);
    const [GenreDetails, setGenreDetails] = useState([]);
    const [video, setVideo] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
            );
            const moviedetail = await data.json();
            setMoviedetails(moviedetail);
            setGenreDetails(moviedetail);
            setLoading(false);
        };

        const fetchCast = async () => {
            const castdata = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language`
            );
            const castdetail = await castdata.json();
            setCastDetails(castdetail);
            setLoading(false);
        }

        const fetchVideo = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
            );
            const videodata = await data.json();
            setVideo(videodata.results);
        }
        fetchMovie();
        fetchCast();
        fetchVideo();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                loading ?
                    <div><Loader /></div>
                    :
                    <div className='md:w-[80%] float-right bg-slate-200 h-full floatRight'>
                        <button onClick={() => navigate(-1)} className='fixed z-10 text-4xl text-black bg-white m-3 md:m-5 rounded-full'><HiChevronLeft /></button>
                        <div className='flex movie-details'>
                            <div className='w-3/6 h-64'>
                                {movieDetails.backdrop_path === null ?
                                    <img src={image} className='h-64 w-full' alt=''/>
                                    :
                                    <img src={"https://image.tmdb.org/t/p/original/" + movieDetails.backdrop_path} className='h-64 w-full' alt=''/>
                                }
                            </div>
                            <div className='w-3/6 mx-1'>
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-blue-900">Movie Information</h3>
                                </div>
                                <div className="border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm leading-4 text-blue-900 font-semibold">Name</dt>
                                            <dd className="mt-1 text-sm leading-4 text-blue-700 sm:col-span-2 sm:mt-0">{movieDetails.title}</dd>
                                        </div>
                                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm leading-4 text-blue-900 font-semibold">Genre</dt>
                                            <dd className="mt-1 text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-0">
                                                {GenreDetails?.genres?.map((tag) => (
                                                    <>
                                                        <Link to='/genre' onClick={() => setMovieGenre(tag.id)}>
                                                            <span key={tag.id} className='text-white font-semibold bg-blue-300 hover:text-blue-900 rounded-lg px-1' style={{marginRight:'0.25rem'}}>{tag.name}</span>
                                                        </Link>
                                                    </>
                                                ))}
                                            </dd>
                                        </div>
                                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm leading-4 text-blue-900 font-semibold">Realease Date</dt>
                                            <dd className="mt-1 text-sm leading-4 text-blue-700 sm:col-span-2 sm:mt-0">{movieDetails.release_date}</dd>
                                        </div>
                                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm leading-4 text-blue-900 font-semibold">Run Time</dt>
                                            <dd className="mt-1 text-sm leading-4 text-blue-700 sm:col-span-2 sm:mt-0">{`${Math.round(+GenreDetails?.runtime / 60)}hr ${+GenreDetails?.runtime - Math.round(+GenreDetails?.runtime / 60) * 60}M`}</dd>
                                        </div>
                                        <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm leading-4 text-blue-900 font-semibold">Plot</dt>
                                            <dd className="mt-1 text-sm leading-4 text-blue-700 sm:col-span-2 sm:mt-0">{movieDetails.overview}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className='items-center mt-10'>
                            <h1 className="text-3xl text-blue-300 font-semibold text-center p-2">Cast</h1>

                            <div
                                className="md:px-5 flex  my-5 max-w-full flex-start overflow-x-auto 
                        relative scrollbar-thin scrollbar-thumb-gray-500/20 scrollbar-track-gray-900/90 md:pb-3">
                                {castDetails?.cast?.map((cast) => (
                                    <>
                                        <div className='flex min-w-[6rem] md:min-w-[10rem] max-w-[9rem] md:max-w-[10rem] h-full items-center text-center flex-col mx-1 card-custom-width'>
                                            {cast.profile_path !== null ? <>

                                                <LazyLoadImage effect='blur' src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} className="w-full h-full rounded-xl" />

                                            </> :

                                                cast.gender === 0 ?
                                                    <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                                                        <img src={men} className="w-full h-full rounded-xl" style={{ height: '240px', width: '160px' }} alt=''/>
                                                    </span>
                                                    :
                                                    <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                                                        <img src={women} className="w-full h-full rounded-xl" style={{ height: '240px', width: '160px' }} alt='' />
                                                    </span>

                                            }
                                            <p className='text-black'>{cast.name}</p>
                                            <p className='text-blue-700'>({cast.character})</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className='items-center'>
                            <h1 className="text-3xl text-blue-300 font-semibold text-center p-2">Crew</h1>

                            <div
                                className="md:px-5 flex  my-5 max-w-full flex-start overflow-x-auto 
                        relative scrollbar-thin scrollbar-thumb-gray-500/20 scrollbar-track-gray-900/90 md:pb-3">
                                {castDetails?.crew?.map((cast) => (
                                    <>
                                        <div className='flex min-w-[6rem] md:min-w-[10rem] max-w-[9rem] md:max-w-[10rem] h-full items-center text-center flex-col mx-1 card-custom-width'>
                                            {cast.profile_path !== null ? <>

                                                <LazyLoadImage effect='blur' src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} className="w-full h-full rounded-xl" />

                                            </> :

                                                cast.gender === 0 ?
                                                    <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                                                        <img src={men} className="w-full h-full rounded-xl" style={{ height: '240px', width: '160px' }} alt=''/>
                                                    </span>
                                                    :
                                                    <span className=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                                                        <img src={women} className="w-full h-full rounded-xl" style={{ height: '240px', width: '160px' }} alt=''/>
                                                    </span>

                                            }
                                            <p className='text-black'>{cast.name}</p>
                                            <p className='text-blue-700'>({cast.job})</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center items-center mb-10 gap-5 flex-wrap'>
                            {Array.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
                                <>
                                    <>
                                    {/* eslint-disable-next-line */}
                                        <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='flex border-2 border-red-600 bg-red-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white'>
                                            <FaPlay />Watch trailer {Array.from(video).filter(trail => trail.type === "Trailer").length > 1 ? index + 1 : ""}
                                        </a>
                                    </>
                                </>
                            ))
                            }
                        </div>


                    </div>
            }
        </>
    )
}
