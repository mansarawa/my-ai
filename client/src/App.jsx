import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionForm from './components/QuestionForm';
import Signup from './components/signup';
import Sidemenu from './components/Sidemenu';
import Userchoice from './context/Userchoice';
import Details from './components/Details';
import GetStarte from './components/GetStarte';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
   <BrowserRouter>
    <Userchoice>
    <Navbar/>
    <Routes>
    <Route path='/' element={<GetStarte/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/dashboard' element={<QuestionForm/>}/>
      
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/dashboard' element={<Sidemenu/>}/> */}
      <Route path='/details' element={<Details/>}/>
    </Routes>
    <ToastContainer/>
    </Userchoice>
   </BrowserRouter>

  );
}

export default App;
