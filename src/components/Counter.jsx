import React from 'react'

function Counter(props) {
  return (
    <div>
        <span>{props.counterObject.value}</span>
        <button
        onClick={()=>{
            props.parentStateData.incrementCount(props.counterObject)
        }}>Increment</button>
        
        <button
        onClick={()=>{
            props.parentStateData.decrementCount(props.counterObject)
        }}>Decrement</button>
        <button
        onClick={()=> {
            props.parentStateData.deleteCounter(props.counterObject)
        }}>Delete
        </button>
    </div>
  )
}

export default Counter