import React from 'react'

const Welcome = (props) => {
  return (
    <>
      <h1>WELCOME To our page</h1>
      <h1>{props.name}</h1>
    </>
  )
}

export default Welcome