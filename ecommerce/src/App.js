import React, { Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import ErrorBoundary from './Components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home'));
const Cart = lazy(() => import('./Components/Cart'));
const NotFound = lazy(() => import('./Components/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<div className="text-center mt-5" role="status">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="text-center text-muted small py-4">
          Demo store for portfolio purposes — no real payments or orders.
        </footer>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
