import React, { useContext, useEffect, useState } from 'react';
import Userchoice, { userPrompt } from '../context/Userchoice';
import Side from '../component css/side.module.css';
import { useNavigate } from 'react-router-dom';

import svgi from '../assets/svghome.jpg'
function Sidemenu(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  const [info, setInfo] = useState([]);
  const { data, setData,fet,setFet } = useContext(userPrompt);
  const [click,setClick]=useState(false)

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
      setData(result.find);
      setInfo(result.find);
      setFet(result.find)
    } else {
      console.log("not happen");
    }
  };

  useEffect(() => {
    fetchPrompt();
    if (props.check) {
      fetchPrompt();
    }
  }, []);

  const handleBtn = (item) => {
     setData(item);
     console.log(item)
    
     localStorage.setItem('userchoice', JSON.stringify(item));
    
    console.log(item)
    navigate('/details');
  };
  const handleburger=()=>{
    setClick(!click)
  }
  return (
    <div className={Side.fullside}>
    <div className={Side.hamburger} onClick={handleburger}>
        <img src={svgi} width={'50px'}/>
      </div>
    <div className={click?Side.click:Side.container}>
      
      {info.map((item, key) => (
        <div key={key} className={Side.menu}>
        <button onClick={() => handleBtn(item)} className={Side.btn}>
          {item.question}
        </button>
        </div>
      ))}
      {/* <Details data={item}/> */}
    </div>
    </div>
  );
}

export default Sidemenu;