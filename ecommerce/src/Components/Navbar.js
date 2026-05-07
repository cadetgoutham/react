import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

export default function Navbar() {
  return (
    <Headroom style={{ zIndex: 1000 }}>
      <nav className='navbar-custom py-3 shadow-sm' style={{ 
        background: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)' 
      }}>
        <div className='container'>
          <div className='row align-items-center'>
            
            <div className='col-12 col-md-4 text-center text-md-start mb-3 mb-md-0'>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h2 className='fw-bold mb-0 text-primary' style={{ letterSpacing: '-1px' }}>
                  MODERN<span className='text-dark'>SHOP</span>
                </h2>
              </Link>
            </div>

            <div className='col-12 col-md-8'>
              <div className='d-flex align-items-center justify-content-center justify-content-md-end gap-3'>
                
                <div className='position-relative flex-grow-1' style={{ maxWidth: '400px' }}>
                  <input 
                    type='text' 
                    placeholder='Search for products...' 
                    className='form-control border-0 bg-light py-2 px-4 rounded-pill'
                    style={{ fontSize: '0.9rem' }}
                  />
                </div>

                <div className='d-flex gap-2'>
                  <Link to="/">
                    <button className='btn btn-outline-primary rounded-pill px-4 btn-sm fw-bold'>
                      Home
                    </button>
                  </Link>
                  <Link to="/Cart">
                    <button className='btn btn-primary rounded-pill px-4 btn-sm fw-bold shadow-sm'>
                      Cart
                    </button>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </nav>
    </Headroom>
  );
}