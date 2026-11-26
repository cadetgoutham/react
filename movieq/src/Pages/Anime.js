import React, { useEffect, useContext} from 'react'
import Pagination from '../Components/Pagination'
import MovieCard from '../Components/MovieCard'
import { UserContext } from '../App'
import { fetchMovieList } from '../tmdb'

export default function Anime() {
    const { movieList, setMovieList, loading, setLoading, setError, error, totalPages, setTotalPages, page, setPage, moviegenre } = useContext(UserContext)


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setPage(page);
        }
    };
    useEffect(() => {
        setLoading(true)
        setError(null)
        setMovieList([])
        const getData = async () => {
            const url = `/api/tmdb/discover/movie?with_genres=${moviegenre}&with_keywords=210024%7C287501&page=${page}`
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
        getData();
        // eslint-disable-next-line
    }, [page])

    return (
            <main className="page-content">
                <header className="page-heading">
                    <p className="page-heading__eyebrow">Animation from around the world</p>
                    <h1>Anime movies</h1>
                    <p>Discover animated adventures, from beloved classics to new favorites.</p>
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
