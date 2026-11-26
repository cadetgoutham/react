import React from 'react'
import logo from '../images/logo.png'

export default function Nav({ onHome }) {
    return (
        <nav className="fixed-top navbar-transparent navbar navbar-expand-lg navbar-light bg-dark p-2 text-dark bg-opacity-20">
            <a
                href="/"
                className="brand navbar-brand"
                aria-label="The Recipe Room home"
                onClick={(e) => { e.preventDefault(); onHome(); }}
            >
                <img src={logo} alt="" width={30} height={30} />
            </a>
        </nav>
    )
}
