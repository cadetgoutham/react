import React, { Suspense, lazy } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;

const Home = lazy(() => import('./Components/Home'));
const Cart = lazy(() => import('./Components/Cart'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;