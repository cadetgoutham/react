import React, { useEffect, useContext } from 'react'
import API_KEY from '../Components/ApiKey'
import Pagination from '../Components/Pagination'
import MovieCard from '../Components/MovieCard'
import { UserContext } from '../App'

export default function Trending() {
  const { movieList, setMovieList, loading, setLoading, setError, error, totalPages, setTotalPages, page, setPage } = useContext(UserContext)


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&with_origin_country=IN&page=${page}`
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
    }
    setMovieList([])
    getData();
    // eslint-disable-next-line
  }, [page])

  return (
    <>
      <div className='md:w-[80%] float-right bg-slate-200 h-full'>
        <MovieCard genreList={movieList} loading={loading} error={error} />
        {movieList.length > 0 ? <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        /> :
          <></>
        }
      </div>
    </>
  )
}
