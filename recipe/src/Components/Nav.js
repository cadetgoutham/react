import React from 'react'
import logo from '../images/The Recipe Room.png'


export default function Nav({setSearch}) {
    return (
        <>
            <nav className=" fixed-top  navbar-transparent navbar navbar-expand-lg navbar-light bg-dark p-2 text-dark bg-opacity-20">
                <a href="/" className="brand navbar-brand"><img src={logo} alt='Home' width={30} height={30} onClick={() => {setSearch("")}}/></a>
            </nav>
        </>
    )
}
