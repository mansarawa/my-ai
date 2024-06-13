import React, { createContext, useState } from 'react'
const userPrompt=createContext();

 export default function  Userchoice(props){
    const [data,setData]=useState();
    const name='mansa'
  return (
    <userPrompt.Provider value={{data,setData}}>
        {props.children}
    </userPrompt.Provider>
  )
}

export  {userPrompt}