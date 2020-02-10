import React from 'react'
import classes from './FinishGame.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
// import axios from 'axios'

const FinishGame = props => {
    
//    function getData() {

   
//          }

    return (
        
        <div className={classes.FinishGame}>
            <p>You Win!</p>
            <p>Your time is {props.time}!</p>
            <Input name="First Name:"  />
            <Input name="Last Name:" />
            <div>
            <Button onClick={props.startNew}>New Game</Button>
            <Button >Save Results</Button>
            </div>
        </div>
    )
}

export default FinishGame
