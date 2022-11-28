import React from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
function Login() {

  const history = useNavigate()
  return (
    <div>  
      <div className="main">
        <div className="logn">
          <div className="sub">
            <div className="head">

            <h1>Login</h1>
            </div>
          
          <div className="sec">
            <input type="text" value="" name="uname" id="uname" placeholder='username' />
            </div>
            <div className='sec2'>
            <input type="password" value="" name="pass" id="pass" placeholder='password' />
            <button className='btn'>Login</button>
            <p className='par'>New to here, <a className='signclick' onClick={()=>{
              history('/signup')
            }} >Sign Up</a> </p>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
