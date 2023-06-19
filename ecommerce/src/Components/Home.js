import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../Details/Reducerslicer';

export default function Home() {
  const {Product} = useSelector((state) => state.Details)
  const dispatch = useDispatch()
  const addToCart = (e,data) => {
    e.preventDefault()
     dispatch(addCart(data))
  }
  return (
    <div className='container d-flex flex-wrap justify-content-center p-3'>
      {Product.map(data => {return(
        <div className='card m-2'>
          <div>
            <img src={data.imgSrc} height={150} width={250} alt={data.title} className='border-radius-9'/>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{data.title}</h5>
            <h6 className='mt-2'>Price : {data.price}</h6>
            <h6 className='mt-2'>Rating : {data.starRating}</h6>
            <h6 className='mt-2'>InStock : {data.Stock}</h6>
          </div>
          <div>
            <button className='btn btn-success' onClick={e => addToCart(e, data)}>Add</button>
          </div>
          <br/>
      </div>
      )})}
  </div>
  )
}
