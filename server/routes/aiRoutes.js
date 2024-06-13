import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import  { GoogleGenerativeAI }  from '@google/generative-ai'
import prompt from '../model/prompt.js';

import answer from '../model/answer.js';
import verify  from '../middleware/verify.js';
dotenv.config();

const router = express.Router();

router.post('/ask',verify, async (req, res) => {
  const { question,userid } = req.body;
  try {

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //  const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();
   // console.log(text);
    const addprompt=await prompt.create({
      question:question,
      userid:userid,
      answer:text,
    })

   await addprompt.save;

    // const addanswer=await answer.create({
      
    //   prompt:addprompt._id
    // })

    // addanswer.save;
    return res.json({answer:text,success:true})
    
  } catch (error) {
    return res.json({success:false})
  }
});

export default router;
