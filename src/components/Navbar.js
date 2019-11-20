import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

    return (

        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">My Blog</a>
                <ul className="right">

                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar