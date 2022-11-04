import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
  
  const [loginInformation, setLoginInformation] = useState({
    email:'',
    password: ''
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInformation({...loginInformation, [name]:value})
    console.log(loginInformation);
  }


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div id='login-window'>
        <form action="POST" id="login-form">
          <h1 style={{marginBottom:"20px", fontWeight:'bold'}}>Login</h1>

          <div className="formElement">
            <i className='zmdi zmdi-email materials-icon-name'></i>
            <input onChange={handleInputChange} autoComplete="off" type="text" name= "email" value ={loginInformation.email} placeholder= "Email address"/>
          </div>

          <div className="formElement">
            <i className='zmdi zmdi-lock materials-icon-name'></i>
            <input onChange={handleInputChange} autoComplete="off" type="text" name= "password" value={loginInformation.password} placeholder= "Password"/>
          </div>

          <div className="form-group form-button">
          <input  type="submit" name='login' id='loginButton' value='Login'/>
          </div>

        </form>
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
      </div>
    </div>
  )
}

export default Login