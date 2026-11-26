import React from 'react'
import logo from '../images/logo.png'

export default function Main({ search, setSearch, onSearch }) {
    return (
        <div id="Main" className='text-center bg-dark bg-opacity-10'>
            <div className='Heading d-flex flex-row gap-4 justify-content-center align-items-center align-middle'>
                <img src={logo} alt='' width={60} height={60} />
                <h1 className='pt-2 fs-1'>The Recipe Room</h1>
            </div>
            <form
                className='pt-xl-5 gap-2 inputField d-flex flex-row justify-content-center align-items-center align-middle'
                role="search"
                onSubmit={(e) => { e.preventDefault(); onSearch(); }}
            >
                <input
                    type='search'
                    className='rounded-pill'
                    aria-label='Search recipes'
                    placeholder='e.g. chicken'
                    maxLength={100}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type='submit' className='rounded-pill btn btn-flex bg-dark text-white bg-opacity-80'>search</button>
            </form>
        </div>
    )
}
