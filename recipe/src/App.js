import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import Nav from './Components/Nav';
import Card from './Components/Card';
import Main from './Components/Main';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const controllerRef = useRef(null);

  const fetchData = useCallback(async (query = '') => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(API_URL, {
        params: { s: query.trim() },
        signal: controller.signal,
        timeout: 10000,
      });
      setMeals(data.meals || []);
      if (!data.meals) {
        setError('No recipes found. Try a different name, or clear the search to see popular recipes.');
      }
    } catch (err) {
      if (axios.isCancel(err)) return;
      setMeals([]);
      setError('Something went wrong while loading recipes. Please check your connection and try again.');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  const handleSearch = () => fetchData(search);
  const handleReset = () => {
    setSearch('');
    fetchData();
  };

  return (
    <div>
      <Nav onHome={handleReset} />
      <main>
        <Main search={search} setSearch={setSearch} onSearch={handleSearch} />
        <Card meals={meals} error={error} loading={loading} />
      </main>
    </div>
  );
}

export default App;
