import React from 'react'
import logo from '../images/The Recipe Room.png'

export default function Main({ search, setSearch, FetchData }) {
    return (
        <>
            <div id="Main" className='text-center bg-dark bg-opacity-10'>
                <div className='Heading d-flex flex-row gap-4 justify-content-center align-items-center align-middle'>
                    <img src={logo} alt='Icon' width={60} height={60} />
                    <h1 className='pt-2 fs-1'>The Recipe Room</h1>
                </div>
                <div className='pt-xl-5 gap-2 inputField d-flex flex-row justify-content-center align-items-center align-middle'>
                    <input type='text' className='rounded-pill' onChange={(e) => { setSearch(e.target.value) }} value={search} />
                    <button className='rounded-pill btn btn-flex bg-dark text-white bg-opacity-80' onClick={FetchData}>search</button>
                </div>
            </div>
        </>
    )
}
