import express from 'express'
import User from '../model/user.js';
import verify  from '../middleware/verify.js';
import bcrypt from 'bcryptjs'
const signup=express.Router();

signup.post('/signup',async(req,res)=>{
    
      const {username,email,password}=req.body;
      const salt=10;
    const hashpassword=await bcrypt.hash(password,salt)
    console.log(hashpassword+"this")
    const existUser=await User.findOne({email:email})
    try {
    if(!existUser)
        {
            const newUser=await User.create({
                username:username,
                password:hashpassword,
                email:email
            })
            
            await newUser.save();
            // const obj={userid:newUser._id}
            // var token=jwt.sign(obj,process.env.JWT_SECRET)
            return res.status(200).json({message:"sign up success",pass:hashpassword,success:true})
        }
        else{
            return res.status(404).json({message:"sign up faild",success:false})
        }
    } catch (error) {
        console.log(error)
    }
})
export default signup