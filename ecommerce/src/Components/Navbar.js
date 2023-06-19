import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'

export default function Navbar() {
  return (
    <Headroom>
    <div className='p-4 bg-light'>
        <h1>Shopping  Website</h1>
        <div className='row justify-content-center'>
            <div className='col-sm-12 col-ml-7 col-lg-6 col-xl-5 d-flex'>
                <Link to="/"><button className='btn btn-success me-4'>Home</button></Link>
                <input type='text' placeholder='search...' className='form-control'/>
                <Link to="/Cart" ><button className='btn btn-success ms-4'>Cart</button></Link>
            </div>
        </div>
        
    </div>
    </Headroom>
  )
}
