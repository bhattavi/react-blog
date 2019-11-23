import React from 'react'
import Logo from '../ab.png'


function Footer() {


    return (
        <footer style={{textAlign: "center"}}>

            <a href="#"><img style={{width:"50px", height:"50px"}} src={Logo} alt="My brand icon" /></a>

            <div className="copy-right">Copyright &copy; abhinav.com
            <br /> 2019
        </div>
        </footer>
    )


}

export default Footer