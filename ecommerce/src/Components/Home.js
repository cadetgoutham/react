import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, setSearchQuery } from '../Details/Reducerslicer';

const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#e2e8f0"/><text x="50%" y="50%" fill="#64748b" font-family="sans-serif" font-size="20" text-anchor="middle">Image unavailable</text></svg>'
);

export default function Home() {
  const { Product, Cart, searchQuery } = useSelector((state) => state.Details);
  const dispatch = useDispatch();

  // Filter products based on search input
  const filteredProducts = Product.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <section className='hero text-center text-white'>
      <div className='container'>
        <h1 className='fw-bold display-5'>Anime merch, delivered fast</h1>
        <p className='lead mb-0'>Stickers, keychains and more — up to 40% off.</p>
      </div>
      <svg className='hero-wave' viewBox='0 0 1440 40' preserveAspectRatio='none' aria-hidden='true'>
        <path d='M0,20 C240,50 480,-10 720,15 C960,40 1200,5 1440,22 L1440,40 L0,40 Z' fill='#f5f3ff' />
      </svg>
    </section>
    <div className='container py-5'>
      <div className='row g-4 justify-content-center'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => {
            const isAdded = Cart.some(cartItem => cartItem._id === item._id);
            const discount = Math.round(((item.price - item.updatedPrice) / item.price) * 100);

            return (
              <div className='col-auto' key={item._id}>
                <div className='card h-100 shadow-sm' style={{ width: '18rem', borderRadius: '15px' }}>
                  {discount > 0 && <span className="badge bg-danger position-absolute m-2">{discount}% OFF</span>}
                  <img
                    src={item.imgSrc}
                    height="200"
                    loading="lazy"
                    className='card-img-top'
                    alt={item.title}
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_IMG; }}
                  />
                  <div className='card-body d-flex flex-column'>
                    <h5 className='card-title fs-6 fw-bold'>{item.title}</h5>
                    <div className='mt-2'>
                      <div className='d-flex align-items-center gap-2'>
                        <span className='h5 fw-bold text-primary'>₹{item.updatedPrice}</span>
                        <span className='text-muted text-decoration-line-through small'>₹{item.price}</span>
                      </div>
                      <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                        <span className='badge bg-warning text-dark'>★ {item.starRating}</span>
                        <span className={`small fw-bold ${item.Stock > 0 ? 'text-success' : 'text-danger'}`}>
                          {item.Stock > 0 ? `${item.Stock} In Stock` : 'Out of Stock'}
                        </span>
                      </div>
                      <button 
                        className={`btn w-100 fw-bold rounded-pill ${isAdded ? 'btn-outline-success disabled' : 'btn-primary'}`} 
                        onClick={() => !isAdded && dispatch(addCart(item))}
                        disabled={item.Stock <= 0}
                      >
                        {item.Stock <= 0 ? 'Out of Stock' : isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-5">
            <h3 className="text-muted">No products match "{searchQuery}"</h3>
            <button className="btn btn-outline-primary rounded-pill mt-2" onClick={() => dispatch(setSearchQuery(''))}>Clear search</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}