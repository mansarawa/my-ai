import React from 'react'
import Nav from '../component css/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('user'))
  const handlelogout=()=>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div className={Nav.container}>
      <div className={Nav.name}>
          <h2>Chat Bot</h2>
      </div>
      <div className={Nav.hmenu}>
          <Link to='/' className={Nav.menu}>Home</Link>
          <Link to='/about' className={Nav.menu}>About</Link>
          <Link to='/contact' className={Nav.menu}>Contact</Link>
          {user?<Link to='/login' onClick={handlelogout} className={Nav.menu}>Logout</Link>:<Link to='/login' className={Nav.menu}>Login</Link>}
          {user?<Link to='/dashboard' className={Nav.menu}>Dashboard</Link>:<Link to='/register' className={Nav.menu}>Register</Link>}
      </div>
    </div>
  )
}

export default Navbar