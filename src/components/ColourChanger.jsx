import React from 'react'
import ColourInputArea from './ColourInputArea.jsx'
import { useState } from 'react'

function ColourChanger() {
  
  // why do i have to use two components for something I can do with one component
  // just to illustrate how we can pass data from children to parents using props
  const [parentColor, setParentColor] = useState("")
  function ChangeColor(userColour){
    if(isColor(userColour.toLocaleLowerCase())){
      setParentColor(userColour)
    }
    else{
      //implement a function that utilizes conditional rendering
      setParentColor("")
    }
  }
  function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color === strColor;
  }
  return (
    <div className='container'>
      <div style={{
          height : "450px",
          backgroundColor: `${parentColor}`,
          margin: "auto",
          width: "50%",
          border: "3px solid black",
          marginBottom: "8px",
          marginTop: "8px"
      }}>
      </div>
      <ColourInputArea
      onColoured = {ChangeColor}/>
    </div>
  )
}

export default ColourChanger


//to do
/*
1.Transfer all my code from app.js to colourChanger.jsx
2. create functionality such that if the colour the user inputs is wrong or invalid,
a small div will appear for a few seconds and leave again. */