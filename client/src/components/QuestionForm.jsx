import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Que from '../component css/question.module.css';
import { userPrompt } from '../context/Userchoice';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import svgi from '../assets/svghome.jpg';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));
  const { data, setData } = useContext(userPrompt);
  const [bool, setBool] = useState(false);
  const [loading, setLoading] = useState(false);
  const username = user.username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://my-ai-2.onrender.com/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          "token": token
        },
        body: JSON.stringify({
          question: question,
          userid: user._id
        })
      });
      const result = await res.json();
      if (typeof result.answer === 'string') {
        setAnswer(result.answer);
        toast.success('Answer received!');
        fetchPrompt();
      } else {
        toast.error('Unexpected response format');
        console.error('Unexpected response format:', result);
      }
      setBool(!bool);
    } catch (error) {
      toast.error('Error fetching the answer');
      console.error('Error fetching the answer:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userFetch();
    const textarea = document.getElementById('area');
    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = `${this.scrollHeight}px`;
    });
  }, []);

  const userFetch = () => {
    setAnswer(data);
  };

  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [click, setClick] = useState(false);

  const fetchPrompt = async () => {
    const res = await fetch('https://my-ai-2.onrender.com/fetch-prompts', {
      method: 'POST',
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
  }, []);

  const handleBtn = (item) => {
    setData(item);
    localStorage.setItem('userchoice', JSON.stringify(item));
    navigate('/details');
  };

  const handleburger = () => {
    setClick(!click);
  };

  let cleanHtml = '';
  const checkanswer=typeof answer ==='string'
  if (checkanswer) {
    const html = marked(answer);
    cleanHtml = DOMPurify.sanitize(html);
  }

  return (
    <div className={Que.fullcontainer}>
      <div className={Que.sidemenu}>
        <div className={Que.menu}>
          <div className={Que.hamburger} onClick={handleburger}>
            <img src={svgi} width={'50px'} />
          </div>
          <div className={click ? Que.click : Que.container}>
            {info.map((item, key) => (
              <div key={key} className={Que.menu}>
                <button onClick={() => handleBtn(item)} className={Que.btn}>
                  {item.question}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={click ? Que.cqcontainer : Que.qcontainer}>
        <div className={Que.full}>
          {!answer && !loading &&  (
            <div className={Que.hdiv}>
              <h1 style={{
                background: 'linear-gradient(to left, #5082ed, #d46677)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Hello, {username.charAt(0).toUpperCase() + username.slice(1)}
              </h1>
              <h2 style={{ color: '#c4c7c5' }}>How can I help you today?</h2>
            </div>
          )}
          {answer && !loading && question && (
            <div className={Que.question}>
              <span>{question}</span>
            </div>
          )}
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
          ) : (
            answer && question &&  (
              <div className={Que.answer}>
                <div>
                  <h3>{answer ? "Answer:" : ""}</h3>
                  <p dangerouslySetInnerHTML={{ __html: cleanHtml }} />
                </div>
              </div>
            )
          )}
        </div>
        <form onSubmit={handleSubmit} className={Que.form}>
          <div className={Que.text}>
            <textarea
              className={Que.chatGPTTextarea}
              id='area'
              placeholder="Message ChatGPT"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
          </div>
          <div className={Que.qbtn}>
            <button type="submit" className="btn btn-primary" style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
              Ask
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
