import React from 'react'
import { useState } from 'react'

//so I need just one component for the div which has the rectangle
//another component for the input 
//since this is just a small implementation, I don't think I need multiple components

function ColourInputArea(props) {
    const [inputText, setInputText] = useState("")

    function handleInput(event){
    const text = event.target.value
    setInputText(text)
    props.onColoured(text)
  }
  return (
    <React.Fragment>
        <div className="d-flex justify-content-center">
        <div className='row'>
        <div className="col-lg-4 col-lg-offset-4" style={{width: "auto"}}>
        <input 
            placeholder='Enter your color here'
            onChange = {handleInput}
            value={inputText}
            className ="form-control">
        </input>
        <span className="input-group-btn">
        <button 
        type="button"
        className ="btn btn-primary m-4"
        onClick={(e)=>{
            e.preventDefault()
            setInputText("")
        }}>clearInputField</button>
        </span>
        </div>
        </div>
        
        </div>
  
    </React.Fragment>
   
  )
}

export default ColourInputArea

// a button that the user can use to clear input field