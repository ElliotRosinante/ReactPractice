//this component contains the div that will receive props to change shape and shape color
//this div contains the shape that we are going to morph into

import React from 'react'


function UpgradedshapeShowCase(props) {
  return (
    <div>
        {/*if divShape  is an object, we set it to the styles and if it is a string we set it to the id */}
        {!(typeof props.divShape ==="object")?(
                <div className={props.divShape} style={{backgroundColor :`${props.divColour}`}}></div>
        ): (
            <div style={props.divShape}></div>
        )}
    </div>
  )
}

export default UpgradedshapeShowCase