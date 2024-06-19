import React from 'react'
import { Link } from 'react-router-dom'
import frontgif from '../assets/frontgif.gif'
import Get from '../component css/get.module.css'
export default function GetStarte() {
  const user=JSON.parse(localStorage.getItem('user'))
  return (
    <div className={Get.acontainer} >
      <div  className={Get.items} style={{textAlign:'start'}}>
        <img src={frontgif} alt="" srcset="" className={Get.image} />
      </div>
      <div  className={`${Get.items} ${Get.niche}`}>
        <h1>Wel Come </h1><h2>in our Chat Bot</h2>
        {!user?<Link to='/login' className="btn btn-primary" style={{textAlign:'center',backgroundColor:'black',border:'none'}}>Login</Link>:<Link to='/dashboard' className="btn btn-primary" style={{textAlign:'center',backgroundColor:'black',border:'none'}}>Go To Dashboard</Link>}
        </div>
    </div>
  )
}

