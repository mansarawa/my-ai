import React, { useContext } from 'react'
import Nav from '../component css/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import  { userPrompt } from '../context/Userchoice';
function Navbar() {
  const {data,setData}=useContext(userPrompt)
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('user'))
  const handlelogout=()=>{
    localStorage.clear();
    navigate('/login')
  }
  const handeldashbord=()=>{
    setData('')
  }
  return (
    <div className={Nav.container}>
      {/* <div className={Nav.name}>
          <h2>Chat Bot</h2>
      </div> */}
      <div className={Nav.hmenu}>
          <Link to='/' className={Nav.menu}>Home</Link>
          <Link to='/about' className={Nav.menu}>About</Link>
          <Link to='/contact' className={Nav.menu}>Contact</Link>
          {user?<Link to='/login' onClick={handlelogout} className={Nav.menu}>Logout</Link>:<Link to='/login' className={Nav.menu}>Login</Link>}
          {user?<Link to='/dashboard'onClick={handeldashbord} className={Nav.menu}>Dashboard</Link>:<Link to='/register' className={Nav.menu}>Register</Link>}
      </div>
      {/* {menu ?<div className={Nav.lmenu}>
          <Link to='/' className={Nav.menus}>Home</Link>
          <Link to='/about' className={Nav.menus}>About</Link>
          <Link to='/contact' className={Nav.menus}>Contact</Link>
          {user?<Link to='/login' onClick={handlelogout} className={Nav.menus}>Logout</Link>:<Link to='/login' className={Nav.menus}>Login</Link>}
          {user?<Link to='/dashboard' className={Nav.menus}>Dashboard</Link>:<Link to='/register' className={Nav.menus}>Register</Link>}
      </div>:""} */}
    </div>
  )
}

export default Navbar