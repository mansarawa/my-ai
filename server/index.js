import express from 'express';
import  { GoogleGenerativeAI }  from '@google/generative-ai'
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv'
import router from './routes/aiRoutes.js';
import connectToDb from './config/dbConfig.js';
import login from './routes/login.js';

import signup from './routes/signup.js';
import fetch from './routes/fetch.js';
dotenv.config();

const app = express();
await connectToDb();
app.use(cors());
app.use(express.json());
app.use('/',router)
app.use('/',login)
app.use('/',signup)
app.use('/',fetch)
app.listen(3000, () => {
  console.log("Server is running on port ");
});
