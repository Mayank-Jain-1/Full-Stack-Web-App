import React, {useState} from 'react'
import './Form.css'
import {useNavigate} from 'react-router-dom'


export const Form = () => {

  const navigate = useNavigate();

  const [userInformation, setUserInformation] = useState({
    fullname: '',
    email: '',
    password: '',
    cpassword: '',
    dob: '',
    gender: ''
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInformation({...userInformation, [name]: value})
  }

  const postdata = async (e) => {
    e.preventDefault();
    const {fullname, email, password, cpassword, dob, gender} = userInformation;

    const res = await fetch('/register',  {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({fullname, email, password, cpassword, dob, gender})
    });
    
    const data = await res.json();       
  if(data.statusCode !== 201) {
      window.alert("Registration Failed. Try again");
    } else {
      window.alert("Registration Successful");
      navigate('/login');
    }
  }
  
  return (
    <div id = "page" >

    <form method="POST" id ="form-box">
        <img src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE=" alt="Register" />
        
        <div id = "form">
        <h1 style={{marginBottom:"30px", fontWeight:'bold'}}>Sign Up</h1>

        <div className="formElement">
          <label htmlFor='name'>
            <i className='zmdi zmdi-account materials-icon-name'></i>
          </label>
            <input onChange={handleInputChange} autoComplete="off" type="text" name= "fullname" value = {userInformation.fullname} placeholder= "Your full name"/>
        </div>

        <div className = "formElement">
          <label htmlFor='email'>
            <i className='zmdi zmdi-email materials-icon-name'></i>
          </label>
            <input onChange={handleInputChange} autoComplete="off" type="email" name= "email" value = {userInformation.email} placeholder='Your Email'/>
        </div>

        <div className = "formElement">
          <label htmlFor='password'>
            <i className='zmdi zmdi-lock materials-icon-name'></i>
          </label>
            <input onChange={handleInputChange} autoComplete="off" type="password" name= "password" value = {userInformation.password} placeholder='Password'/>
        </div>

        <div className = "formElement">
          <label htmlFor='cpassoword'>
            <i className='zmdi zmdi-lock-outline materials-icon-name'></i>
          </label>
            <input onChange={handleInputChange} autoComplete="off" type="password" name= "cpassword" value = {userInformation.cpassword} placeholder='Confirm password'/>
        </div>

        <div className = "formElement" >
          <label htmlFor='dob'>
            <i className='zmdi zmdi-calendar materials-icon-name'></i>
          </label>
            <input onChange={handleInputChange} autoComplete="off" type="date" name= "dob" default= '1-1-2000' value = {userInformation.dob} placeholder='Date of birth'  />
        </div>

        <div className="formElement">
        <label for="gender">
          <i className='zmdi zmdi-male-female materials-icon-name'></i>
        </label>
          <select onChange={handleInputChange} name="gender">
            <option value="none" selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="form-group form-button">
          <input type="submit" name='submit' id='submit' value="register" onClick={postdata}/>
        </div>
        </div>
      </form>
    </div>
  )
}