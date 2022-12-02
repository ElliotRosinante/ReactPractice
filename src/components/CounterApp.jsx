import React from 'react'
import Counters from './Counters'
import MyProvider from './MyProvider'
import Navbar from './Navbar'

//I will give the outermost div a classname that helps me to style it.
//we need a navbar component here and a counters component

function CounterApp() {
  return (
    <MyProvider>
        <div>
            <Navbar/>
            <Counters/>
        </div>
    </MyProvider>
  )
}

export default CounterApp