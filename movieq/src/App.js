import NavBar from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upcoming from './Pages/Upcoming'
import Genre from './Pages/Genre'
import Trending from './Pages/Trending'
import Home from "./Pages/Home";
import Anime from "./Pages/Anime";
import { createContext, useState } from 'react'
import Details from "./Pages/Details";

export const UserContext = createContext();


function App() {
  const [movieList, setMovieList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moviegenre, setMovieGenre] = useState('28')
  const [page, setPage] = useState(1)
  const [activemobile, setActivemobile] = useState(false);
  const [activePage, setActivePage] = useState('/')

  return (
    <>
      <UserContext.Provider
        value={{
          movieList, setMovieList, totalPages, setTotalPages,
          loading, setLoading, error, setError, moviegenre,
          setMovieGenre, page, setPage, activemobile, setActivemobile,
          activePage, setActivePage
        }}
      >
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/anime" element={<Anime />} />
              {/* <Route path="/anime" element={<Details />} /> */}
              <Route path='/moviedetail/:id' element={<Details />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;