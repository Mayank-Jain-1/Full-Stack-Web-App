import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'
const Welcome = (props) => {
  return (
    <>
      <div className='Welcome'>
        <h1 style={{color: "white", fontSize: "10rem"}}>Welcome</h1>
        <h1 className='welcomeText'>Your Account has</h1>
        <h1>been created</h1>
        <h1>{props.name}</h1>
      </div>
      <div id="whatsNew">
        <div className="carasoul">
          <Link href=""><img src="" alt="" /></Link>
        </div>
      </div>
    </>
  )
}

export default Welcome