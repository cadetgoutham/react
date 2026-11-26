import NavBar from "./Components/Nav";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Upcoming from './Pages/Upcoming'
import Genre from './Pages/Genre'
import Trending from './Pages/Trending'
import Home from "./Pages/Home";
import Anime from "./Pages/Anime";
import { createContext, useState } from 'react'
import Details from "./Pages/Details";

export const UserContext = createContext();


function App() {
  const [moviegenre, setMovieGenre] = useState('28')
  const [activemobile, setActivemobile] = useState(false);

  return (
    <>
      <UserContext.Provider
        value={{
          moviegenre, setMovieGenre, activemobile, setActivemobile
        }}
      >
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/anime" element={<Anime />} />
              <Route path='/moviedetail/:id' element={<Details />} />
              <Route path="*" element={<main className="page-content"><h1>Page not found</h1><Link to="/">Back to movies</Link></main>} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;