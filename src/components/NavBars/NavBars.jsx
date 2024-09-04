import React from 'react'
import { SiEducative } from 'react-icons/si'
import { Link } from 'react-router-dom'
import'./NavBars.css'
// import Courses from './Courses/Courses' 

const NavBars = () => {
  return (
    <>
     <nav className='nav'>
      <div className='navigation'>
       <Link to='/'>
       <div className='nav_header'>
        <div className='logo'><SiEducative/></div>
        <h2 className="nav_logo"><span>Edu</span>Trek</h2>
       </div>
       </Link>
<div className="links">
<ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
</div>
<div className="nav_button">
<button>Login</button>
<button>Register</button>

</div>
        </div> 
     </nav>
    
    </>
  )
}

export default NavBars
