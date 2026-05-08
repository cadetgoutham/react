import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../Details/Reducerslicer';

export default function Home() {
  const { Product, Cart, searchQuery } = useSelector((state) => state.Details);
  const dispatch = useDispatch();

  // Filter products based on search input
  const filteredProducts = Product.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
                  <img src={item.imgSrc} height="200" className='card-img-top' alt={item.title} style={{ objectFit: 'cover' }} />
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
          </div>
        )}
      </div>
    </div>
  );
}