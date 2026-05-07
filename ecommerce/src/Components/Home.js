import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../Details/Reducerslicer';

export default function Home() {
  // Access both Product list and Cart list from the store
  const { Product, Cart } = useSelector((state) => state.Details);
  const dispatch = useDispatch();

  return (
    <div className='container py-5'>
      <div className='row g-4 justify-content-center'>
        {Product.map(item => {
          // Check if this specific item is already in the cart
          const isAdded = Cart.some(cartItem => cartItem._id === item._id);

          // Calculate Discount Percentage
          const discount = Math.round(((item.price - item.updatedPrice) / item.price) * 100);

          return (
            <div className='col-auto' key={item._id}>
              <div className='card h-100 shadow-sm' style={{ width: '18rem', border: 'none', borderRadius: '15px' }}>
                {/* Discount Badge */}
                {discount > 0 && (
                  <span className="badge bg-danger position-absolute m-2" style={{ zIndex: 1 }}>
                    {discount}% OFF
                  </span>
                )}
                
                <img 
                  src={item.imgSrc} 
                  height="200" 
                  className='card-img-top' 
                  alt={item.title} 
                  style={{ objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />

                <div className='card-body d-flex flex-column'>
                  <h5 className='card-title fs-6 fw-bold text-dark' style={{ height: '40px', overflow: 'hidden' }}>
                    {item.title}
                  </h5>

                  <div className='mt-2'>
                    {/* Price Section */}
                    <div className='d-flex align-items-center gap-2'>
                      <span className='h5 fw-bold text-primary mb-0'>₹{item.updatedPrice}</span>
                      <span className='text-muted text-decoration-line-through small'>₹{item.price}</span>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                      <span className='badge bg-warning text-dark'>★ {item.starRating}</span>
                      <span className={`small fw-bold ${item.Stock > 0 ? 'text-success' : 'text-danger'}`}>
                        {item.Stock > 0 ? `${item.Stock} In Stock` : 'Out of Stock'}
                      </span>
                    </div>

                    {/* Dynamic Button Status */}
                    <button 
                      className={`btn w-100 fw-bold rounded-pill ${isAdded ? 'btn-outline-success disabled' : 'btn-primary'}`} 
                      onClick={() => !isAdded && dispatch(addCart(item))}
                      disabled={item.Stock <= 0}
                    >
                      {item.Stock <= 0 ? (
                        'Out of Stock'
                      ) : isAdded ? (
                        <span><i className="bi bi-check-lg"></i> Added to Cart</span>
                      ) : (
                        'Add to Cart'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}