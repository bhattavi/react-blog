import React from 'react'
import Logo from '../ab.png'



function Header() {


    return (
        <header>


            <nav className="navbar navbar-dark bg-dark fixed-top">

                <a className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Brand logo" />
                    <span> </span>Abhinav's Blog
  </a>
            </nav>




        </header>
    )


}

export default Header