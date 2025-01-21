import React from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div>
            <form action="">
                <p>Sign in</p>
                <div>

                    <input type="email" placeholder='Email' />

                </div>
                <div>

                    <input type="text" placeholder='Password' />
                </div>
                <div>
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>
                <div>
                    <p>New?</p>
                    <Link to ={'/Register'}>Register</Link>
                </div>
                <div>
                    <Link to={'/Home'}>Sign in</Link>
                </div>

            </form>
        </div>
    )
}

export default Signin 
