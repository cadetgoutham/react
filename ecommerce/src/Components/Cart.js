import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveCart, increementCart, decreementCart } from '../Details/Reducerslicer';

export default function Cart() {
  const { Cart: cartItems } = useSelector(state => state.Details);
  const dispatch = useDispatch();

  const totalValue = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.updatedPrice * item.Stock), 0);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <div className="text-center py-5"><h3>Your cart is empty</h3></div>;
  }

  return (
    <div className='container py-5'>
      <div className="bg-white p-4 rounded-4 shadow-sm">
        {cartItems.map(item => (
          <div key={item._id} className='row align-items-center mb-4 pb-3 border-bottom'>
            <div className='col-md-2'><img src={item.imgSrc} className='img-fluid rounded-3' alt={item.title}/></div>
            <div className='col-md-4'>
              <h5 className='fw-bold mb-1'>{item.title}</h5>
              <p className='text-muted small mb-0'>Rating: {item.starRating}</p>
            </div>
            <div className='col-md-3 text-center'>
              <div className='d-flex align-items-center justify-content-center'>
                <button className='btn btn-outline-secondary btn-sm' onClick={() => dispatch(decreementCart(item))}>-</button>
                <span className='mx-3 fw-bold'>{item.Stock}</span>
                <button className='btn btn-outline-secondary btn-sm' onClick={() => dispatch(increementCart(item))}>+</button>
              </div>
            </div>
            <div className='col-md-2 text-end'><span className='fw-bold'>₹{(item.updatedPrice * item.Stock).toFixed(2)}</span></div>
            <div className='col-md-1 text-end'><button className='btn btn-link text-danger' onClick={() => dispatch(RemoveCart(item))}>✕</button></div>
          </div>
        ))}
        <div className='d-flex justify-content-between mt-4 align-items-center'>
          <h4 className='fw-bold'>Total Amount:</h4>
          <h4 className='text-primary fw-bold'>₹{totalValue.toLocaleString()}</h4>
        </div>
      </div>
    </div>
  );
}