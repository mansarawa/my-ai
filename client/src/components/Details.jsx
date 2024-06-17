import React, { useContext, useState } from 'react';
import { userPrompt } from '../context/Userchoice';
import Sidemenu from './Sidemenu';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Det from '../component css/details.module.css';
import svgi from '../assets/svghome.jpg';
function Details() {
  const { data } = useContext(userPrompt);
  const [click, setClick] = useState(false)
  const [info, setInfo] = useState([]);

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

  return (
    <div className={Det.fullcontainer}>
     
      <div className={Det.sidemenu}>
        <div className={Det.menu}>
          <div className={Det.hamburger} onClick={handleburger}>
            <img src={svgi} width={'50px'} />
          </div>
          <div className={click?Det.click:Det.container}>
            {info.map((item, key) => (
              <div key={key} className={Det.menu}>
                <button onClick={() => handleBtn(item)} className={Det.btn}>
                  {item.Detstion}
                </button>
              </div>
            ))}
          </div>
        
      </div>
      </div>
      <div className={click ? Det.dclick :Det.details}>
        <span className={Det.question}>{data.question}</span>
        <span style={{ color: "white" }}> My Ai:-</span><br />
        <span className={Det.answer} dangerouslySetInnerHTML={{ __html: cleanHtml }}></span>
      </div>
    </div>
  );
}

export default Details;
