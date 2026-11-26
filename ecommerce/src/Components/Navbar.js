import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Headroom from 'react-headroom';
import { setSearchQuery } from '../Details/Reducerslicer';

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = useSelector(state => state.Details.searchQuery);
  const cartCount = useSelector(state => state.Details.Cart.reduce((n, i) => n + i.Stock, 0));
  const isCartPage = location.pathname === '/cart';

  return (
    <Headroom style={{ zIndex: 1000 }}>
      <nav className='navbar-custom py-3' aria-label="Main">
        <div className='container'>
          <div className='row align-items-center g-2'>
            <div className='col-12 col-md-4'>
              <Link to="/" className="brand">
                MODERN<span>SHOP</span>
              </Link>
            </div>

            <div className='col-12 col-md-8'>
              <div className='d-flex align-items-center justify-content-md-end gap-3'>
                <input
                  type='search'
                  aria-label="Search products"
                  placeholder={isCartPage ? "Search disabled in cart" : "Search for products..."}
                  className='form-control search-input rounded-pill'
                  style={{ maxWidth: '400px' }}
                  value={isCartPage ? "" : query}
                  disabled={isCartPage}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
                <div className='d-flex gap-2'>
                  <NavLink to="/" end className={({ isActive }) => `btn btn-sm rounded-pill px-4 fw-bold ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>Home</NavLink>
                  <NavLink to="/cart" className={({ isActive }) => `btn btn-sm rounded-pill px-4 fw-bold position-relative ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>
                    Cart
                    {cartCount > 0 && <span className="badge rounded-pill bg-danger ms-2" aria-label={`${cartCount} items in cart`}>{cartCount}</span>}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
}
