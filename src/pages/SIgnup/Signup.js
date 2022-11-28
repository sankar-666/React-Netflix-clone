import React from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";
function Signup() {
  const history = useNavigate()
  return (
    <div>  
      <div className="main">
        <div className="logn">
          <div className="sub">
            <div className="head">

            <h1>Signup</h1>
            </div>
          
          <div className="sec">
            <input type="text" value="" name="uname" id="uname" placeholder='Name' />
            </div>
            <div className='sec2'>
            <input  type="number" value="" name="uname" id="uname" placeholder='age' />
            <br/>
            <br/>
            
            <input type="number" value="" name="uname" id="uname" placeholder='Mobile No' />
            <br/>
            <br/>
            
            <input type="email" value="" name="uname" id="uname" placeholder='Email' />
            <br/>
            <br/>
            
            <input type="text" value="" name="uname" id="uname" placeholder='username' />
            <br/>
            <br/>
            
            <input type="password" value="" name="pass" id="pass" placeholder='password' />
            <button className='btn'>Sign up</button>
            <p className='par'>Already a member, <a className='signclick' onClick={()=>{
              history('/login')
            }} >Login</a> </p>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
