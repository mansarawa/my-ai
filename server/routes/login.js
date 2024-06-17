import express from 'express'
import User from '../model/user.js';
import verify  from '../middleware/verify.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();
const login=express.Router();

login.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const existUser=await User.findOne({email:email})
    
    if(existUser)
        {
            const ismatch=await bcrypt.compare(password,existUser.password)
            if(ismatch)
            {
                
                const obj={userId:existUser._id}
                var token =jwt.sign(obj,process.env.JWT_SECRET)
                return res.json({message:"login up success",token:token,user:existUser,success:true})
                
            }          
        }
        else{
            return res.json({message:"login up faild",success:false})
        }
})

export default login