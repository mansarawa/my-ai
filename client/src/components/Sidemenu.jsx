import React, { useContext, useEffect, useState } from 'react';
import Userchoice, { userPrompt } from '../context/Userchoice';
import Side from '../component css/side.module.css';
import { useNavigate } from 'react-router-dom';
import Details from './Details';

function Sidemenu(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  const [info, setInfo] = useState([]);
  const { data, setData } = useContext(userPrompt);

  const fetchPrompt = async () => {
    const res = await fetch('https://my-ai-1.onrender.com/fetch-prompts', {
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

  return (
    <div className={Side.container}>
      {info.map((item, key) => (
        <div key={key} className={Side.menu}>
        <button onClick={() => handleBtn(item)} className={Side.btn}>
          {item.question}
        </button>
        </div>
      ))}
      {/* <Details data={item}/> */}
    </div>
  );
}

export default Sidemenu;
