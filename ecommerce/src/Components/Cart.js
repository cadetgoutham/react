import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveCart, increementCart, decreementCart } from '../Details/Reducerslicer';

export default function Cart() {
  const {Cart} = useSelector(state => state.Details)
  const dispatch = useDispatch()
  let Totalvalue = 0
  
  const Total = () => {
    Cart.forEach(element => {
      Totalvalue +=  (element.updatedPrice * element.Stock)
    });
  }
  Total()
  const HandleRemove = (e, data) => {
    e.preventDefault();
    dispatch(RemoveCart(data))

  }
  const HandelDecree = (e, data) => {
    e.preventDefault();
    dispatch(decreementCart(data))
  }
  const HandelIncree = (e, data) => {
    e.preventDefault();
    dispatch(increementCart(data))
  }
  return (
    <>
      {Cart.map(data => {return(
      <div className='d-flex m-4 align-items-center justify-content-center'>
        <img height={150} width={180} className='border-radius-9 me-4' src={data.imgSrc} alt={data.title}/>
        <h5 className='card-title me-4'>{data.title}</h5>
        <h6 className='mt-2 me-4'>Actaul Price : {data.price}</h6>
        <h6 className='mt-2 me-4'>discount Price : {data.updatedPrice}</h6>
        <h6 className='mt-2 me-4'>Rating : {data.starRating}</h6>
        <div className='mt-4 me-2'>
          <button className='btn btn-primary ms-3' onClick={e => HandelIncree(e, data)}>+</button>
          <pan className='ms-3'>Quantity {data.Stock}</pan>
          <button className='btn btn-primary ms-3' onClick={e => HandelDecree(e, data)}>-</button>
          <button className='btn btn-primary ms-3' onClick={(e) => HandleRemove(e,data)}>Remove</button>
        </div>
      </div>
      )})}
      <h6>The Total cart value is {Totalvalue}</h6>
      </>
  )
}
