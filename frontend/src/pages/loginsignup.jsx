import React from 'react'
import './css/loginsignup.css'

export const LoginSignup = () => {
    return (

        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>

                <div className="loginsignup-fields">
                    <input type="text" className="name" placeholder="Name" />
                    <input type="email" className="email" placeholder="Email ID" />
                    <input type="password" className="password" placeholder="Password" />
                </div>

                <button className="signup-button">Continue</button>

                <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;