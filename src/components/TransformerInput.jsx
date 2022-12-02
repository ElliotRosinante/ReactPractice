import React, { useState } from 'react'

function TransformerInput(props) {
    //we need two useState one for the background, one for the shape
    // conditional styling will help us make the shapes morph 
    //should I make it an object so I use only one state or I should just use two separate states

    //since our app isn't complex, I will just use two different states
    const [background, setBackground] = useState("")
    const [shape, setShape] = useState("")

    function handleShape(e){
        const value = e.target.value
        setShape(value)
    }
    function handleBackground(e){
        const value = e.target.value
        setBackground(value)
    }
    function transferChildData(e){
        e.preventDefault()
        props.fetchChildData(shape,background)
        //only after the data from the child component is sent that we clear all the input fields
        setBackground("")
        setShape("")
    }

  return (
    <div style=
    {{width: "50%",
    margin: "auto"}}>
        <form onSubmit={transferChildData}>
            <div className='form-group'>
            <label htmlFor="shape">Shape</label>
            <input id='shape'
            className='form-control'
            placeholder='your shape here'
            onChange={handleShape}
            value={shape}></input>
            </div>
            <div className="form-group">
            <label htmlFor="background">Background</label>
            <input id='background'
            className='form-control'
            placeholder='your background here'
            onChange={handleBackground}
            value={background}></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div style={{...props.customDivStyle}} className="mb-3 mt-3">
                            {/* If customDivStyle is an object render the div
                            if it isn't just ignore */}
            </div>
        </form>
    </div>
  )
}

export default TransformerInput