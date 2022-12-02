//my goal is to learn to use the context api to transfer data to several child components directly
// so that I do not need to resort to manual prop drilling

import React from 'react'
import MyContext from './MyContext'
import Counter from "./Counter"

function Counters() {


  return (
    <MyContext.Consumer>
             {
            (stateObj) => {
                return (
                    <div>
                        <button onClick={()=>{stateObj.resetCount()}}>reset Count</button>

                        {stateObj.counters.map((countObj) => {
                        return (<Counter key={countObj.id}
                        parentStateData = {stateObj}
                        counterObject = {countObj}/> )})}
                    </div>
                )
            }
        }

        
    </MyContext.Consumer>
  )
}

export default Counters


/*  
steps I have to take to complete this component
I need to map through the counters array inside the state which is inside my provider.
i.e (I need to consume the context in order to use the data inside it )
*/