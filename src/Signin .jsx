import React from 'react'
import {Link} from 'react-router-dom'
import './Signin.css';

const Signin = () => {
    return (
        <div className='signin'>
            <form action="" className='form'>
                <p className='sign'>Sign in</p>
                <div className='inputs'>

                    <input type="email" placeholder='Email' className='inp'/>

                </div>
                <div className='inputs'>

                    <input type="text" placeholder='Password' className='inp'/>
                </div>
                <div className='check'>
                    <input type="checkbox" />
                    <p className='rem'>Remember me</p>
                </div>
                <div className='reg'>
                    <p>New?</p>
                    <Link to ={'/Register'} className='link'>Register</Link>
                </div>
                <div className='button'>
                    <Link to={'/Home'} className='btn'>Sign in</Link>
                </div>

            </form>
        </div>
    )
}

export default Signin 
