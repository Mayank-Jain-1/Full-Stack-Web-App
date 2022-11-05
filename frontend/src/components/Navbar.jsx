import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  
  const navigate = useNavigate();

  const navigateTo = (e) => {
    const destination = e.target.value;
    navigate(`/${destination.toLowerCase()}`);
  }

  return (
    <>
    <div id="navbar">

      <div className='logo'>
        <img src="https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg" alt="" />
        Company
      </div>
      <div className="navigation">
        <ul className="navigationlist">
          {/* <button name='home' onClick={navigateTo} id='home-link' className="navigationLink"><a style={{color: props.current === "Home" ? "#79b8fb" : "gray"}}>Home</a></button>
          <button name='about' onClick={navigateTo} id='about-link' className="navigationLink" ><a style={{color: props.current === "About" ? "#79b8fb" : "gray" }}>About</a></button>
          <button name='contact' onClick={navigateTo} id='contact-link' className="navigationLink"><a style={{color: props.current === "Contact" ? "#79b8fb" : "gray" }}>Contact</a> </button>
          <button name='login' onClick={navigateTo} id='login-link' className="navigationLink"><a style={{color: props.current === "Login" ? "#79b8fb" : "gray" }}>Login</a></button>
          <button name='register' onClick={navigateTo} id='register-link' className="navigationLink"><a style={{color: props.current === "Register" ? "#79b8fb" : "gray" }}>Register</a></button> */}


          <input type="submit" className='navigationLink' style={{color: props.current === "home" ? "#79b8fb" : "gray" }} value="Home"onClick={navigateTo}/>
          <input type="submit" className='navigationLink' style={{color: props.current === "about" ? "#79b8fb" : "gray" }} value="About" onClick={navigateTo}/>
          <input type="submit" className='navigationLink' style={{color: props.current === "contact" ? "#79b8fb" : "gray" }} value="Contact" onClick={navigateTo}/>
          <input type="submit" className='navigationLink' style={{color: props.current === "login" ? "#79b8fb" : "gray" }} value="Login" onClick={navigateTo}/>
          <input type="submit" className='navigationLink' style={{color: props.current === "register" ? "#79b8fb" : "gray" }} value="Register" onClick={navigateTo}/>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar