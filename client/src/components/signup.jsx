import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function Signup() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate=useNavigate();
  const handlesubmit=async(e)=>{

    e.preventDefault();
    try {
    const res=await fetch('https://my-ai-1.onrender.com/signup',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        email:email,
        password:password
      })
    })
    const result=await res.json();
    if(result.success)
      {
        navigate('/dashboard')
        toast.success("success")
      }

      else
      {
        console.log("faild")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handlesubmit} style={{margin:'8% 0 0 30%',padding:'5%',borderRadius:'10px',border:'1px solid black',width:'40%'}}>
        <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      </div>
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
    <Link to='/login' style={{margin:'15% 0px 0px 25%',color:'black',width:'100%'}}> Already have an account ?</Link>
  </form>
  </div>
  )
}

export default Signup