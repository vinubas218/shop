import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div className='signin'>
      <form action="" className='forms'>
      <p className='sign'>Register</p>
      <div className='inputs'>
        <input type="text" placeholder='Username' className='inp'/>
        
      </div>
      <div className='inputs'>
      <input type="text" placeholder='Email' className='inp'/>
        
      </div>
      <div className='inputs'>
      <input type="text" placeholder='Password' className='inp'/>
      
      </div>
      <div className='inputs'>
      <input type="text" placeholder='Confirm Password' className='inp'/>
      </div>
      <div className='check'>
                    <input type="checkbox" />
                    <p className='rem'>I agree with the term of services.</p>
                </div>
      <div className='button'>
      <Link to={'/Signin'} className='btn'>Sign in</Link>
      </div>
      </form>
    </div>
  )
}

export default Register
