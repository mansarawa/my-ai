
import React, { useContext, useEffect, useState } from 'react';
import { userPrompt } from '../context/Userchoice';
import Sidemenu from './Sidemenu';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Det from '../component css/details.module.css';

import svgi from '../assets/svghome.jpg';
export default function Details() {
const { data,setData } = useContext(userPrompt);
const [click, setClick] = useState(false)
const [info, setInfo] = useState([]);
const token = JSON.parse(localStorage.getItem('token'));
const user = JSON.parse(localStorage.getItem('user'));
const answer = data.answer;
console.log(data);

let cleanHtml = '';
if (answer) {
const html = marked(answer);
cleanHtml = DOMPurify.sanitize(html);
}
const handleburger = () => {
setClick(!click);
};
const handleBtn=(item)=>{
  console.log(item)
  setData(item)
}
const fetchPrompt = async () => {
  const res = await fetch('https://my-ai-2.onrender.com/fetch-prompts', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'token': token
    },
    body: JSON.stringify({
      userid: user._id
    })
  });
  const result = await res.json();
  if (result.success) {
    // setData(result.find);
    setInfo(result.find);
    // setFet(result.find)
  } else {
    console.log("not happen");
  }
};

useEffect(() => {
  fetchPrompt();

}, []);

return (
<div className={Det.fullcontainer}>


  <div className={Det.sidemenu}>
    
      <div className={Det.hamburger} onClick={handleburger}>
        <img src={svgi} width={'50px'} />
      </div>
      <div className={click?Det.click:Det.container}>
        {info.map((item, key) => (
          <div key={key} className={Det.menu}>
            <button onClick={() => handleBtn(item)} className={Det.btn}>
              {item.question}
            </button>
          </div>
        ))}
    
    
  </div>
  </div>
  <div className={click ? Det.details:Det.dclick}>
    <div className={Det.ques}>
    <span className={Det.question}>{data.question}</span>
    <span style={{ color: "white" }}> My Ai:-</span><br /></div>
    <div className={Det.answer}>
    <span  dangerouslySetInnerHTML={{ __html: cleanHtml }}></span>
    </div>
  </div>
</div>
);
}