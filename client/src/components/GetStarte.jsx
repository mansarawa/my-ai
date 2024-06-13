import React from 'react'
import { Link } from 'react-router-dom'
import frontgif from '../assets/frontgif.gif'
export default function GetStarte() {
  const user=JSON.parse(localStorage.getItem('user'))
  return (
    <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row-reverse',paddingTop:'5%'}}>
      <div style={{width:'50%'}}>
        <img src={frontgif} alt="" srcset=""  height='500px'/>
      </div>
      <div style={{width:'50%'}}>
        <h1>Wel Come </h1><h2>in our Chat Bot</h2>
        {!user?<Link to='/login' className="btn btn-primary" style={{textAlign:'center',backgroundColor:'black',border:'none'}}>Login</Link>:<Link to='/dashboard' className="btn btn-primary" style={{textAlign:'center',backgroundColor:'black',border:'none'}}>Go To Dashboard</Link>}
        </div>
    </div>
  )
}

