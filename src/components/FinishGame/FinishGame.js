import React, { Component } from 'react'
import classes from './FinishGame.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import axios from 'axios'

import Validate from '../../Auxillary/Validation/Validation'

class FinishGame extends Component  {

    constructor(props){
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                result: ''
            },
            isValid: false
        }
    }
    
    personInfoHandler = (e) => {

        e = e || window.event 
        
         let data = this.state.data
         let isValid = this.state.isValid
         data.result = this.props.score || this.props.time

        if(e.target.name ==='First Name:'){
         data.firstName = e.target.value.trim()
        }
        if(e.target.name ==='Last Name:'){
         data.lastName = e.target.value.trim()
        }

        isValid = Validate(this.state.data.firstName, this.state.data.lastName)
        this.setState({
            data, isValid
        })
    }
  
    sendData = () => {  
        const resultObj = this.props.time ? "personList" : "snakeGame"

        axios.post(`https://memorino-8206d.firebaseio.com/${resultObj}.json`, this.state.data)
        .catch(error => {
        console.log(error)
        })
    }

    render(){
        const result = this.props.time || this.props.score
        return (   
            <div className={classes.FinishGame}>
                <p>Game Over!</p>
                <b>Your result is <strong style={{color: '#21eb47'}}>{ result }</strong>{this.props.time ? ' s!' : ' pts!'}</b>
                
                <Input name="First Name:"  onChange={this.personInfoHandler}  />
                <Input name="Last Name:" onChange={this.personInfoHandler} />
                <div>
                <Button onClick={this.props.startNew}>New Game</Button>
                <Button onClick={this.sendData} disabled={!this.state.isValid}>Save Results</Button>
                </div>
            </div>
    )}
    
}

export default FinishGame
