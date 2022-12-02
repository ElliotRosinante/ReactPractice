import React from 'react'
import MyContext from './MyContext'

//we display the length of the counters which is in the state in MyProvider.jsx --in one span
//we also display the total value (this is a challenge I have decided to give myself) --in another span
//I may have to resort to using reduce in this situation to sum up the total value
function Navbar() {
  return (
    <MyContext.Consumer>
        {
            (stateObj) => {
                return (
                    <nav className= "navbar navbar-light bg-light">
                        <span>{stateObj.counters.filter(countObj=>(
                         countObj.value > 1)).length}</span>
                         
                        <span>{stateObj.counters.reduce((accumulator, current)=> {
                        return accumulator + current.value
                        },0)}</span>
                    </nav>
                )
            }
        }
    </MyContext.Consumer>
  )
}

export default Navbar