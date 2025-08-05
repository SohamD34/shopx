import React from 'react'
import './css/loginsignup.css'

export const LoginSignup = () => {

    const [state, setState] = React.useState("Login");
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const login = async () => {
        console.log("Login function called", formData);
        let responseData;

        const res = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        console.log('fetched');
        
        responseData = await res.json();
        console.log(responseData);

        if (responseData && responseData.success === true) {
            localStorage.setItem('auth-token', responseData.authToken);
            window.location.replace('/');
        }
        else{
            alert(responseData.error);
        }
    }

    const signup = async () => {
        console.log("Signup function called", formData);
        let responseData;

        const res = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        console.log('fetched');
        
        responseData = await res.json();
        console.log(responseData);

        if (responseData && responseData.success === true) {
            localStorage.setItem('auth-token', responseData.authToken);
            window.location.replace('/');
        }
        else{
            alert(responseData.error);
        }
    }


    return (

        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>

                <div className="loginsignup-fields">

                    {(state === "Sign Up") 
                    ? <input name='username' value={formData.username} onChange={changeHandler} type="text" className="name" placeholder="Name" />
                    :<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" className="email" placeholder="Email ID" />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" className="password" placeholder="Password" />
                
                </div>

                <button className="signup-button" onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

                {(state === "Sign Up")
                ? <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
                : <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p> }

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;