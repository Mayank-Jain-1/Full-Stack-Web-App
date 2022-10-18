import React from 'react'
import './Welcome.css'
const Welcome = (props) => {
  return (
    <>
      <div className='Welcome'>
      <h1 className='welcomeText'><span style = {{color : '#69c29f'}}>Welcome,</span>Your Account </h1>
      <h1>has been created</h1>
      <h1>{props.name}</h1>
      </div>
    </>
  )
}

export default Welcome