import React from 'react';
import { useState } from 'react';


//so I need just one component for the div which has the rectangle
//another component for the input 
//since this is just a small implementation, I don't think I need multiple components
function FirstImplementation() {

  const [inputText, setInputText] = useState("")
  function handleInput(event){
    const text = event.target.value
    setInputText(text)
  }
  
  function ChangeColor(){
    if(isColor(inputText.toLocaleLowerCase())){
      return inputText
    }
    else{
      //implement a function that utilizes conditional rendering
      return null
    }
  }
  function renderTryAgain(){
    if(!isColor(inputText.toLocaleLowerCase())) {
        return (<div className="alert alert-danger">
          Dear User, It seems the color you have entered is invalid. Please try again.
        </div>)
    }
    else{
      return null
    }
  }
  //function to check if the color the user enters is a colour which also proceeds to return the color
  // Here's a simple function that checks color name support in the current browser:

function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
}

// my div has to be at the center and it should have at least a border
//when it comes to coding, there is no right or wrong way of implementing functionality.
//it's just that some things are optimized and scalable than others
  return (
    <div className="container">
      <div style={{
          height : "450px",
          backgroundColor: ChangeColor(),
          margin: "auto",
          width: "50%",
          border: "3px solid black",
          marginBottom: "8px"
      }}>
      </div>
      <div className="d-flex justify-content-center">
        <div className='col-lg-4 col-lg-offset-4'>
        <input className='form-control'
        placeholder='Enter your color here'
        onChange = {handleInput}
        value={inputText}></input>
        
        <button 
            type="button"
            className ="btn btn-success m-4"
            onClick={(e)=>{
                e.preventDefault()
                setInputText("")
            }}>clearInputField
        </button>
        { renderTryAgain()}
        </div>
        </div>
      </div> 
  );
}

export default FirstImplementation;

//first I need to use color as texts more specifically and then later I will augment it so we can use hex values