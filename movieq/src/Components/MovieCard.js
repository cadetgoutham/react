import React from 'react'
import image from '../images/Brown Mystery Movie Poster .png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';

export default function MovieCard({ genreList, loading }) {
    return (
        <>
            {
                loading ?
                    <div><Loader /></div>
                    :
                    <div className="flex flex-wrap relative justify-evenly md:justify-around h-full" data-projection-id="21" style={{ transform: 'none', transformOrigin: '50% 50% 0p' }}>
                        <div className="infinite-scroll-component__outerdiv">
                            <div className="infinite-scroll-component w-full md:p-2 flex flex-wrap gap-x-1 relative justify-evenly md:justify-around" style={{ height: 'auto', overflow: 'hidden' }}>
                                {genreList.length > 0 ?
                                    genreList.map((data, index) => {
                                        return (
                                            <div className="card relative w-full md:w-72 h-[410px] md:h-[400px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden" data-projection-id="42" style={{ opacity: '1', transform: 'none', transformOrigin: '50% 50% 0px', maxWidth: '288px' }} key={index}>
                                                <div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
                                                    <h1 className="text-white text-xl font-semibold  break-normal break-words">{data.title}</h1>
                                                    <h1 className="font-bold text-orange-400 p-2 bg-zinc-900 rounded-full">{Math.floor(+data.vote_average * 10) / 10}</h1>
                                                </div>
                                                <Link to={`/moviedetail/${data.id}`} className='h-full w-full shadow absolute z-10'></Link>
                                                <div>
                                                    {
                                                        data.poster_path !== null ? 
                                                            <LazyLoadImage effect='blur' className='img object-cover' src={"https://image.tmdb.org/t/p/w500" + data.poster_path} />
                                                            :
                                                            <img className='img object-cover' src={image} alt='' /> 
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <><Loader /></>
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
