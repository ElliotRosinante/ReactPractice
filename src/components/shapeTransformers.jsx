import React, { useState } from 'react'
import TransformerInput from './TransformerInput'
import "./transformerStyles.css"

function ShapeTransformers() {
    const[background,setBackground] = useState("")
    const [shape,setShape] = useState("")

//function should be called transform div
//takes two parameters which represent the background and shape gotten from the user
function TransformDiv(userShape,userBackground){
    setShape(userShape)
    if(isColor(userBackground.toLocaleLowerCase())){
        setBackground(userBackground)
      }
      else{
        //implement a function that utilizes conditional rendering
        setBackground(" ")
      }
}
function isColor(strColor){
    var s = new Option().style
    s.color = strColor
    return s.color === strColor
  }
/*wherever I see red, I will repace it with the background state variable so that 
the user can get his desired background color
because, in my stylesheet, I set all the backgrounds to red */


const wierdCoolShapes = ["triangleBottomleft","triangleBottomright","triangleTopright","triangleTopleft",
"pacman","spaceInvader","moon","cone","triangleUp","triangleDown","triangleBottom","triangleLeft","triangleRight"]
function renderWierdDiv(){
    return (
        <div style={shape}></div>
        // over here we will render the shapes that we need to use the background variable in
    )
}
function decideIfShapeIsWierdOrNot(){
    if(wierdCoolShapes.includes(shape)){
        console.log("yes this shape does exist")
            if(shape==="cone"){
                console.log("cone works")
                setShape({
                    width: "0",
                    height: "0",
                    borderLeft: "70px solid transparent",
                    borderRight: "70px solid transparent",
                    borderTop: `100px solid ${background}`,
                    borderRadius: "50%",
              })
              renderWierdDiv()
            }
            else if(shape ==="pacman"){
                setShape({
                    width: "0px",
                    height: "0px",
                    borderRight: "60px solid transparent",
                    borderTop: `60px solid ${background}`,
                    borderLeft: `60px solid ${background}`,
                    borderBottom: `60px solid ${background}`,
                    borderTopLeftRadius: "60px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                    borderBottomRightRadius: "60px",

                })
                renderWierdDiv()
              }
              else if(shape ==="moon"){
                setShape({
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    boxShadow: `15px 15px 0 0 ${background}`,
                })
                renderWierdDiv()
              }
              else if(shape ==="spaceInvader"){
                setShape({
                    
                        boxShadow: `0 0 0 1em ${background},
                        0 1em 0 1em ${background},
                        -2.5em 1.5em 0 .5em ${background},
                        2.5em 1.5em 0 .5em ${background},
                        -3em -3em 0 0 ${background},
                        3em -3em 0 0 ${background},
                        -2em -2em 0 0 ${background},
                        2em -2em 0 0 ${background},
                        -3em -1em 0 0 ${background},
                        -2em -1em 0 0 ${background},
                        2em -1em 0 0 ${background},
                        3em -1em 0 0 ${background},
                        -4em 0 0 0 ${background},
                        -3em 0 0 0 ${background},
                        3em 0 0 0 ${background},
                        4em 0 0 0 ${background},
                        -5em 1em 0 0 ${background},
                        -4em 1em 0 0 ${background},
                        4em 1em 0 0 ${background},
                        5em 1em 0 0 ${background},
                        -5em 2em 0 0 ${background},
                        5em 2em 0 0 ${background},
                        -5em 3em 0 0 ${background},
                        -3em 3em 0 0 ${background},
                        3em 3em 0 0 ${background},
                        5em 3em 0 0 ${background},
                        -2em 4em 0 0 ${background},
                        -1em 4em 0 0 ${background},
                        1em 4em 0 0 ${background},
                        2em 4em 0 0 ${background}`,
                        background: `${background}`,
                        width: "1em",
                        height: "1em",
                        overflow: "hidden",
                        margin: "50px 0 70px 65px"
                      }   
                )
                renderWierdDiv()
              }
              else if(shape ==="triangleUp"){
                setShape({
                    width: "0",
                    height: "0",
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderBottom: `100px solid ${background}`,
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleDown"){
                setShape({
                    width: "0",
                    height: "0",
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderTop: `100px solid ${background}`,                    
                })
                renderWierdDiv()
              }
              else if(shape === "triangleLeft"){
                setShape({
                    width: "0",
                    height: "0",
                    borderTop: "50px solid transparent",
                    borderRight: `100px solid ${background}`,
                    borderBottom: "50px solid transparent",
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleRight"){
                setShape({
                    width: "0",
                    height: "0",
                    borderTop: "50px solid transparent",
                    borderLeft: `100px solid ${background}`,
                    borderBottom: "50px solid transparent",
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleBottomleft"){
                setShape({
                width: "0",
                height: "0",
                borderBottom: `100px solid ${background}`,
                borderRight: "100px solid transparent",                    
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleTopright"){
                setShape({
                    width: "0",
                    height: "0",
                    borderTop: `100px solid ${background}`,
                    borderLeft: "100px solid transparent",  
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleTopleft"){
                setShape({
                    width: "0",
                    height: "0",
                    borderTop: `100px solid ${background}`,
                    borderRight: "100px solid transparent",                 
                })
                renderWierdDiv()
              }
              else if(shape ==="triangleBottomright"){
                setShape({
                        width: "0",
                        height: "0",
                        borderBottom: `100px solid ${background}`,
                        borderLeft: "100px solid transparent"
                    }
                )
                renderWierdDiv()
              }
              else{
                setShape("")
              }
        }
        else{
            return (
               <div style={{background : `${background}`, margin: "auto"}} id={shape} >
               {/* our shapes get rendered here*/}
               </div>
            )   
           }
    }



  return (
    <div >
        <div style=
            {{width: "50%",
            margin: "auto"}}>
        <div className="card mb-3" style={{width: "24rem",margin: "auto"}}>
            <div className="card-header ">
                You can choose any of the shapes listed below, Please type the exact name you see
                for whichever shape you want to see
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">square  rectangle  parallelogram </li>
                <li className="list-group-item">circle  oval  triangleUp  triangleDown</li>
                <li className="list-group-item">triangleLeft  triangleRight  egg</li>
                <li className="list-group-item">triangleTopleft  triangleTopright</li>
                <li className="list-group-item">triangleBottomleft  triangleBottomright</li>
                <li className="list-group-item">pacman  moon  cone spaceInvader</li>
            </ul>
        </div>
        {/* if the shape is a unique shape, we render it differently with only the style property
        and then embed the background in the respective borders
        but if it is a common shape, we just render it normally */}
        {decideIfShapeIsWierdOrNot()}
        <TransformerInput fetchChildData = {TransformDiv}
        customDivStyle = {shape}/>
        </div>
    </div>
  )
}




export default ShapeTransformers

// 1.I could create a style property for each div and set it's background dynamically
//then I will use conditional styling to change the classNames dynamically on form submit
// or I could just define each and every style I need as js object