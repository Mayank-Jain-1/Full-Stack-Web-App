import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link className='carasoulLink' to="/login"><img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" /><p className='LinkOverText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tenetur veritatis ex autem perspiciatis voluptatem, assumenda nihil</p></Link>
          <Link className='carasoulLink' to="/login"><img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" /><p className='LinkOverText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tenetur veritatis ex autem perspiciatis voluptatem, assumenda nihil</p></Link>
          <Link className='carasoulLink' to="/login"><img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" /><p className='LinkOverText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tenetur veritatis ex autem perspiciatis voluptatem, assumenda nihil</p></Link>
          <Link className='carasoulLink' to="/login"><img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" /><p className='LinkOverText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tenetur veritatis ex autem perspiciatis voluptatem, assumenda nihil</p></Link>
          
        </div>
      </div>
    </>
  )
}

export default Welcome