import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  

  return (
    <>
    <div id="navbar">

      <div className='logo'>
        <img src="https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg" alt="" />
        Company
      </div>
      <div className="navigation">
        <ul className="navigationlist">
          <li id='home-link' className="navigationLink"><a style={{color: props.current === "Home" ? "#79b8fb" : "gray"}}>Home</a></li>
          <li id='about-link' className="navigationLink"><a style={{color: props.current === "About" ? "#79b8fb" : "gray" }}>About</a></li>
          <li id='contact-link' className="navigationLink"><a style={{color: props.current === "Contact" ? "#79b8fb" : "gray" }}>Contact</a> </li>
          <li id='login-link' className="navigationLink"><a style={{color: props.current === "Login" ? "#79b8fb" : "gray" }}>Login</a></li>
          <li id='register-link' className="navigationLink"><a style={{color: props.current === "Register" ? "#79b8fb" : "gray" }}>Register</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar