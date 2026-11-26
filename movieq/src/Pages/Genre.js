import { useEffect, useContext } from 'react'
import genres from '../genre'
import Btn from '../Components/Btn'
import Pagination from '../Components/Pagination'
import MovieCard from '../Components/MovieCard'
import { UserContext } from '../App'
import { fetchMovieList } from '../tmdb'


export default function Genre() {
  const { movieList, setMovieList, loading, setLoading, setError, error, totalPages, setTotalPages, moviegenre, setMovieGenre, page, setPage } = useContext(UserContext)


  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };


  useEffect(() => {
    setLoading(true)
    setError(null)
    const getData = async () => {
      const url = `/api/tmdb/discover/movie?with_genres=${moviegenre}&with_origin_country=IN&page=${page}`
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
  }, [moviegenre, page])

  return (
      <main className="page-content">
        <header className="page-heading">
          <p className="page-heading__eyebrow">Pick a mood, find a movie</p>
          <h1>Browse by genre</h1>
          <p>Explore the stories you love, or find something completely different.</p>
        </header>
        <div className="genre-panel">
          {
            genres ? genres.map((data, index) => {
              return (
                <div key={data.id}><Btn id={data.id} item={data.name} setMovieGenre={setMovieGenre} genre={data.id} moviegenre={moviegenre} /></div>
              )
            }) : <div></div>
          }
        </div>
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
