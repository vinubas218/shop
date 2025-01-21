import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Confirm Password' />
      </div>
      <div>
      <Link to={'/Signin'}>Sign in</Link>
      </div>
    </div>
  )
}

export default Register
