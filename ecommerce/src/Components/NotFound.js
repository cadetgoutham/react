import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="text-muted">We couldn't find that page.</p>
      <Link to="/" className="btn btn-primary rounded-pill px-4">Back to shop</Link>
    </div>
  );
}
