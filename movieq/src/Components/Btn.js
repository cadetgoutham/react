function Btn({ id, item, setMovieGenre, genre, moviegenre }) {
  const active = +moviegenre === +id

  return (
    <button
      type="button"
      className={`genre-chip${active ? ' is-active' : ''}`}
      aria-pressed={active}
      onClick={() => setMovieGenre(genre)}
    >
      {item}
    </button>
  )
}

export default Btn
