import React, { useState } from 'react'
import Mix from '../component css/loginsignup.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const navigate=useNavigate();
  const handlesubmit=async(e)=>{
    e.preventDefault();
   
    try {   
    const res=await fetch('https://my-ai-2.onrender.com/login',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const result=await res.json();
    if(result.success)
      {
        console.log(result.token)
        localStorage.setItem('token',JSON.stringify(result.token))
        localStorage.setItem('user',JSON.stringify(result.user))
        navigate('/dashboard')
        toast.success("success")
       
      }
      else
      {
       toast.error("Not registerd")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={Mix.container}>
      <form onSubmit={handlesubmit} className={Mix.form} >
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    
    <button type="submit" className="btn btn-primary" style={{textAlign:'center',marginLeft:'40%',backgroundColor:'black',border:'none'}}>
      Submit
    </button><br /><br />
   <Link to='/register' style={{margin:'15% 0px 0px 25%',color:'black',width:'100%'}}> Not have an account ?</Link>
  </form>
  </div>
  )
}

export default Login