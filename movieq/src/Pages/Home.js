import React, { useEffect, useContext } from 'react'
import Pagination from '../Components/Pagination'
import MovieCard from '../Components/MovieCard'
import { UserContext } from '../App'
import { fetchMovieList } from '../tmdb'

export default function Home() {
  const { movieList, setMovieList, loading, setLoading, setError, error, totalPages, setTotalPages, page, setPage } = useContext(UserContext)


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  useEffect(() => {
    setLoading(true)
    setError(null)
    const getData = async () => {
      const url = `/api/tmdb/trending/movie/day?with_origin_country=IN&page=${page}`
      try {
        const result = await fetchMovieList(url);
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
      <main className="page-content">
        <header className="page-heading">
          <p className="page-heading__eyebrow">Your daily dose of cinema</p>
          <h1>Trending now</h1>
          <p>Fresh picks and audience favorites, all in one place.</p>
        </header>
        <MovieCard genreList={movieList} loading={loading} error={error} />
        {movieList.length > 0 ? <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        /> :
          <></>
        }
      </main>
  )
}
