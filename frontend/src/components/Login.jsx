import React from 'react'
import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate();

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

  const postLoginData = async (e) => {
    e.preventDefault();
    console.log(1);
    const {email, password} = loginInformation;
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    });

    const data = await res.json();
    console.log(data);
    if (data.statusCode === 200){
      navigate('/welcome')
    }else {
      window.alert("Either the email or password is not correct!")
    }


  }


  return (
    <div id= "login-page">
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
          <input type="submit" name='login' id='loginButton' value='Login'
          onClick={postLoginData}/>
          </div>

        </form>
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
      </div>
    </div>
  )
}

export default Login