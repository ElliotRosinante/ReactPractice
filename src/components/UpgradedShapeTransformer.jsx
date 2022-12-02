import React, { useState } from 'react'
import UpgradedshapeShowCase from './UpgradedshapeShowCase'
import "./UpgradedShapeTransformer.css"

function UpgradedShapeTransformer() {

    /*array of shapes that we need unique styling for */
    const wierdCoolShapes = ["triangleBottomleft","triangleBottomright","triangleTopright","triangleTopleft",
"pacman","spaceInvader","moon","cone","triangleUp","triangleDown","triangleLeft","triangleRight"]

    const [userShape, setUserShape] = useState("")
    const [userColour, setUserColour] = useState("")

    function handleShapeChange(event){
        const shapeInput = event.target.value
        setUserShape(shapeInput)
    }
    function handleColourChange(event){
        const colourInput = event.target.value
        setUserColour(colourInput)
    }
    function isColor(strColor){
        var s = new Option().style
        s.color = strColor
        return s.color === strColor
      }
    function UpdateTransformer(){

        // setUserColour()
          if(isColor(userColour.toLocaleLowerCase())){
            const currentColour = userColour
            setUserColour(currentColour)
          }
          else{
            //implement a function that utilizes conditional rendering
            setUserColour("")
          }
        // setUserShape()
        for(const shape of wierdCoolShapes){
            if(shape.includes(userShape)){
                if(shape === "triangleUp"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderLeft: "50px solid transparent",
                        borderRight: "50px solid transparent",
                        borderBottom: `100px solid ${userColour}`,
                    })
                }
                else if(shape === "triangleDown"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderLeft: "50px solid transparent",
                        borderRight: "50px solid transparent",
                        borderTop: `100px solid ${userColour}`,                    
                    })
                }
                else if(shape === "triangleLeft"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderTop: "50px solid transparent",
                        borderRight: `100px solid ${userColour}`,
                        borderBottom: "50px solid transparent",
                    })
                }
                else if(shape === "triangleRight"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderTop: "50px solid transparent",
                        borderLeft: `100px solid ${userColour}`,
                        borderBottom: "50px solid transparent",
                    })
                }
                else if(shape === "triangleTopleft"){
                    setUserShape(
                        {
                        width: "0",
                        height: "0",
                        borderTop: `100px solid ${userColour}`,
                        borderRight: "100px solid transparent",                 
                        }
                    )
                }
                else if(shape === "triangleTopright"){
                    setUserShape(
                        {
                            width: "0",
                            height: "0",
                            borderTop: `100px solid ${userColour}`,
                            borderLeft: "100px solid transparent",  
                        }
                    )
                }
                else if(shape === "triangleBottomleft"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderBottom: `100px solid ${userColour}`,
                        borderRight: "100px solid transparent",                    
                        })
                }
                else if(shape === "triangleBottomright"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderBottom: `100px solid ${userColour}`,
                        borderLeft: "100px solid transparent"
                    })
                }
                else if(shape === "pacman"){
                    setUserShape(
                        {
                            width: "0px",
                            height: "0px",
                            borderRight: "60px solid transparent",
                            borderTop: `60px solid ${userColour}`,
                            borderLeft: `60px solid ${userColour}`,
                            borderBottom: `60px solid ${userColour}`,
                            borderTopLeftRadius: "60px",
                            borderTopRightRadius: "60px",
                            borderBottomLeftRadius: "60px",
                            borderBottomRightRadius: "60px",
        
                        } 
                    )
                }
                else if(shape === "moon"){
                    setUserShape({
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        boxShadow: `15px 15px 0 0 ${userColour}`,
                    })
                }
                else if(shape === "spaceInvader"){
                    setUserShape({
                    
                        boxShadow: `0 0 0 1em ${userColour},
                        0 1em 0 1em ${userColour},
                        -2.5em 1.5em 0 .5em ${userColour},
                        2.5em 1.5em 0 .5em ${userColour},
                        -3em -3em 0 0 ${userColour},
                        3em -3em 0 0 ${userColour},
                        -2em -2em 0 0 ${userColour},
                        2em -2em 0 0 ${userColour},
                        -3em -1em 0 0 ${userColour},
                        -2em -1em 0 0 ${userColour},
                        2em -1em 0 0 ${userColour},
                        3em -1em 0 0 ${userColour},
                        -4em 0 0 0 ${userColour},
                        -3em 0 0 0 ${userColour},
                        3em 0 0 0 ${userColour},
                        4em 0 0 0 ${userColour},
                        -5em 1em 0 0 ${userColour},
                        -4em 1em 0 0 ${userColour},
                        4em 1em 0 0 ${userColour},
                        5em 1em 0 0 ${userColour},
                        -5em 2em 0 0 ${userColour},
                        5em 2em 0 0 ${userColour},
                        -5em 3em 0 0 ${userColour},
                        -3em 3em 0 0 ${userColour},
                        3em 3em 0 0 ${userColour},
                        5em 3em 0 0 ${userColour},
                        -2em 4em 0 0 ${userColour},
                        -1em 4em 0 0 ${userColour},
                        1em 4em 0 0 ${userColour},
                        2em 4em 0 0 ${userColour}`,
                        background: `${userColour}`,
                        width: "1em",
                        height: "1em",
                        overflow: "hidden",
                        margin: "50px 0 70px 65px"
                      }   )
                }
                if(shape === "cone"){
                    setUserShape({
                        width: "0",
                        height: "0",
                        borderLeft: "70px solid transparent",
                        borderRight: "70px solid transparent",
                        borderTop: `100px solid ${userColour}`,
                        borderRadius: "50%",
                  })
                }
            }
        }
        // setUserShape(JSON.stringify(userShape))
        if(!wierdCoolShapes.includes(userShape)){
            setUserShape(userShape)
            //we will just set the userShape as a string and pass it down as an id 
            //to the div in the child container.
        }
        setUserColour("")
       
        // setUserShape("")
    }
    //I forgot you could only use lifecycle methods in class components
  return (
    <div className="biggest-div">
        <UpgradedshapeShowCase
        divColour = {userColour}
        divShape = {userShape}/>
        <div className='mt-4'>
            <input type="text"
            onChange={handleShapeChange}
            value = {userShape}
            placeholder = "your shape here" />

            <input type="text"
            onChange={handleColourChange}
            value={userColour}
            placeholder = "your shape's colour here"></input>

            <button onClick={UpdateTransformer}>transform</button>
        </div>
    </div>
  )
}

export default UpgradedShapeTransformer



/*
1.If the user's colour is in the array which we will use preset styling for, we will return 
a custom object
const wierdCoolShapes = ["triangleBottomleft","triangleBottomright","triangleTopright","triangleTopleft",
"pacman","spaceInvader","moon","cone","triangleUp","triangleDown","triangleBottom","triangleLeft","triangleRight"]

Loop through this array, if the string is contained inside any of the current iteration 

2. else, we will return 
 */
