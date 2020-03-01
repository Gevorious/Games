import React from 'react'
import classes from './FinishGame.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import axios from 'axios'

const FinishGame = props => {

    const data = {}
    
    function personInfoHandler(e){
        data.time = props.time

       if(e.target.name ==='First Name:'){
        data.firstName = e.target.value
       }
        
       if(e.target.name ==='Last Name:'){
        data.lastName = e.target.value
       }
   }
    
 function sendData() {
            axios.post(`https://memorino-8206d.firebaseio.com/personList.json`,data)
            .catch(error => {
                console.log(error)
            })
        }

    return (   
        <div className={classes.FinishGame}>
            <p>You Win!</p>
            <p>Your time is <strong>{props.time}</strong>!</p>
            <Input name="First Name:"  onChange = {event => personInfoHandler(event)} />
            <Input name="Last Name:" onChange = {event => personInfoHandler(event)} />
            <div>
            <Button onClick={props.startNew}>New Game</Button>
            <Button onClick={sendData}>Save Results</Button>
            </div>
        </div>
    )
}

export default FinishGame
