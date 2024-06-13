import React, { useContext } from 'react'
import { userPrompt } from '../context/Userchoice'
import Sidemenu from './Sidemenu'
import Det from '../component css/details.module.css'
 function Details () {
    const {data}= useContext(userPrompt)
    
    console.log(data)
    
  //   function addLineBreaks(text) {
  //     return text.replace(/\*\*/g, '<br />').replace(/\*/g, '');
  // }
  

  // Apply the function to the text
  // let formattedText = addLineBreaks(text);
  
  // Output the formatted text
  // console.log(formattedText);
  return (
    <div className={Det.fullcontainer}>
      <div className={Det.sidemenu}>
        <Sidemenu/>
      </div>
      < div className={Det.details}>

          <span className={Det.question}>{data.question}</span>
           <span style={{color:"white"}}> My Ai:-</span><br />
          <span className={Det.answer} >{data.answer}</span>   
      </div>
    </div>
  )
}

export default Details