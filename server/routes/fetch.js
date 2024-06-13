import express from 'express'
import verify from '../middleware/verify.js'
import prompt from '../model/prompt.js';
const fetch=express.Router();

fetch.post('/fetch-prompts',verify,async(req,res)=>{
    const {userid}=req.body
    try {
   
    const find=await prompt.find({userid:userid}).sort({ createdAt: -1 });
    if(find)
        {
            //console.log(find)
            return res.status(200).json({message:"fetch successfully",success:true,find:find})
        }
    else
        {
            // console.log("error")
            return res.status(400).json({message:'error',success:false})
        }
             
    } catch (error) {
        console.log(error)
    }
})

export default fetch