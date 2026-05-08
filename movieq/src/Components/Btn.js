import { Link } from 'react-router-dom'

function Btn({ id, item, setMovieGenre, genre, moviegenre }) {

  return (
    <Link className={`py-2 px-4 m-2 text-[15px] bg-white text-black font-semibold rounded-3xl leading-[50px] hover:bg-sky-300 ${+moviegenre === +id ? 'bg-sky-300 Btn-active' : ''}`} onClick={() => { setMovieGenre(genre) }}>{item}</Link>
  )
}

export default Btn