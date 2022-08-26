import React from 'react'
import ReactDOM from 'react-dom'


function Dice (props){
    
    const styles ={
        backgroundColor:props.isHeld ? "#00e600" : "white",
        color:props.isHeld ? "white" : "black"
    }
    
    return (
            <div className='dice-die'  style = {styles} onClick={props.holdDie}> <img src  = {`./images/black${props.value}.svg`}></img></div>

    )
}

export default Dice