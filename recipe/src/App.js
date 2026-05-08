import { useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './Components/Nav';
import Card from './Components/Card';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [data, setData] = useState(() => []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("")

  const FetchData = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        setError("Sorry, But your search did not return any recipes, please try again with different name or press icon for the most populor recipes")
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
      setSearch("")
  }
  useEffect(() => {
      FetchData()
      //eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <div>
          <Nav setSearch={setSearch}/>
          <Main search={search} setSearch={setSearch} FetchData={FetchData}/>
          <Routes>
            <Route path="/" element={<Card data={data} error={error} loading={loading}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
