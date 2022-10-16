import React, {useState} from 'react'

export const Form = () => {

  const [userInformation, setUserInformation] = useState({
    fullName: "",
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: ''
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInformation({...userInformation, [name]: value})
  }

  const handleSubmit = () => {
    console.log(userInformation);
  }

  return (
    <form action="" >
        <div>
          <h2>Name</h2>
          <input onChange={handleInputChange} autoComplete="off" type="text" name= "fullName" value = {userInformation.fullName}/>
        </div>

        <div>
          <h2>Email</h2>
          <input onChange={handleInputChange} autoComplete="off" type="email" name= "email" value = {userInformation.email}/>
        </div>

        <div>
          <h2>Password</h2>
          <input onChange={handleInputChange} autoComplete="off" type="password" name= "password" value = {userInformation.password}/>
        </div>

        <div>
          <h2>Confirm Password</h2>
          <input onChange={handleInputChange} autoComplete="off" type="password" name= "confirmPassword" value = {userInformation.confirmPassword}/>
        </div>

        <div>
          <h2>Date Of Birth</h2>
          <input onChange={handleInputChange} autoComplete="off" type="date" name= "dob" value = {userInformation.dob}/>
        </div>

        <div>
          <h2>Gender</h2>
          <input onChange={handleInputChange} autoComplete="off" type="gender" name= "gender" value = {userInformation.gender}/>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
  )
}
