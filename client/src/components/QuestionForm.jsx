import React, {  useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Que from '../component css/question.module.css'
import { userPrompt } from '../context/Userchoice';
import Sidemenu from './Sidemenu';
import {Circles} from 'react-loader-spinner'
// toast.configure();


const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const token=JSON.parse(localStorage.getItem('token'))
  const user=JSON.parse(localStorage.getItem('user'))
  const {data,setData}=useContext(userPrompt)
  const [bool, setBool] = useState(false)
  const [loading, setLoading] = useState()
  const username=user.username
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch(`https://my-ai-1.onrender.com/ask`, {
        method: 'post',
        headers: {
          'Content-Type': "application/json",
          "token":token
        },
        body: JSON.stringify({
          question: question,
          userid:user._id
        })
      });
      const result = await res.json();
      if (typeof result.answer === 'string') {
        setAnswer(result.answer);
        toast.success('Answer received!');
      } else {
        toast.error('Unexpected response format');
      }
     
      setBool(!bool)
      //setQuestion('')
     
    } catch (error) {
      toast.error('Error fetching the answer');
      console.error(error);
    }
    finally {
      setLoading(false); // Hide loader
    }
  };
  useEffect(() => {
    userFetch();
    <Sidemenu/>
    const textarea = document.getElementById('area');

      textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = `${this.scrollHeight}px`;
      });
    
  }, []);
  const userFetch=()=>{
    setAnswer(data)
  }
  // const formattedText = answer.replace(/\*\*/g, '\n');


  return (
    <div className={Que.fullcontainer}>
      <div className={Que.sidemenu}>
    <Sidemenu check={bool}/>
    </div>
    <div className={Que.container}>
      
      <div className={Que.full}>
        {!answer && !loading && <div className='container' style={{marginTop:'15%',marginLeft:'25%',width:'60%'}}>
          <h1 style={{background:'linear-gradient(to  left, #5082ed , #d46677)',WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',}}>Hello,{username.charAt(0).toUpperCase() + username.slice(1)}</h1>
          <h2 style={{color:'#c4c7c5'}}>How can I help you today?</h2>
          </div>}
        {answer&&<div className={Que.question}>
            <span>{question}</span>
        </div>}
        
        {loading ? (
          <div className={Que.loader}>
            <Circles
  height="80"
  width="80"
  color="black"
  ariaLabel="circles-loading"

  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
          </div>
        ): ( answer &&(<div className={Que.answer}>
        <div>
          <h3>{!answer?"Answer-:":""}</h3>
          <p>{answer}</p>
        </div>
        </div>))}
        </div>
      
     
      <form onSubmit={handleSubmit}  className={Que.form}>
      
        <div className={Que.text}>
          <textarea className={Que.chatGPTTextarea} id='area' placeholder="Message ChatGPT"    value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required></textarea>

        </div>
        <div className={Que.btn}>
        <button type="submit" className="btn btn-primary" style={{color:'white',backgroundColor:'black',border:'none'}}>Ask</button>
        </div>
      </form>
     
    </div>
    </div>
  );
};

export default QuestionForm;
