import React from 'react'
import ColourChanger from './ColourChanger'
import FirstImplementation from './myFirstColorChangerImplementation'
import ShapeTransformers from './shapeTransformers'
import UpgradedShapeTransformer from './UpgradedShapeTransformer'
import CounterApp from './CounterApp'

function App() {
  return (
    <div className='App'>
        <ColourChanger className="container"/>
        <FirstImplementation className = "container"/>
        <ShapeTransformers/>
        <UpgradedShapeTransformer/>
        <CounterApp/>
    </div>
  )
}

export default App