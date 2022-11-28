import React from 'react'
import './NavBar.css'
import { useNavigate } from "react-router-dom";


function NavBar() {
  const navigate= useNavigate()
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      {/* <span>Home</span> */}
      <span className='login' > Home</span>
      <span className='login1' > Tv Shows</span>
      <span className='login2' > Movies</span>
      <span className='login3' > News&Popular</span>
      <span className='login4' > My List</span>
      <span onClick={()=>{
        navigate('/login')
      }}  className='login5' > Login</span>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar
