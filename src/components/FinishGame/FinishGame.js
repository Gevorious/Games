import React, { Component } from 'react'
import classes from './FinishGame.css'

import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import axios from 'axios'

import Validate from '../../Auxillary/Validation/Validation'
import { Redirect } from 'react-router'

class FinishGame extends Component  {

        state = {
            data: {
                firstName: '',
                lastName: '',
                result: ''
            },
            showStats: false,
            isValid: false
        }
   
    
    personInfoHandler = (e) => {
        e = e || window.event 
        
         const data = {...this.state.data}
         let isValid = this.state.isValid
         data.result = this.props.score || this.props.time
        if(e.target.name ==='First Name:'){
         data.firstName = e.target.value.trim()
        }
        if(e.target.name ==='Last Name:'){
         data.lastName = e.target.value.trim()
        }

        isValid = Validate(data.firstName, data.lastName)
        this.setState({ data, isValid })
    }
  
    sendData = () => {  
        const game = this.props.game 

        axios.post(`https://fun-games-46704.firebaseio.com/${game}.json`, this.state.data)
        .then(res=>{
            if(res.status === 200){
                this.setState({showStats: true})
            }
        })
        .catch(error => {
        console.log(error)
        })
    }

    render(){
        const result = this.props.time || this.props.score

        return (
            <>
            {!this.state.showStats?   
            (<div className={classes.FinishGame}>
                <h1>Game Over!</h1>
                <h2>Your result is <strong>{ result }</strong>{this.props.time ? ' s!' : ' pts!'}</h2>
                <div className={classes.inputs}>
                    <Input name="First Name:"  onChange={this.personInfoHandler}  />
                    <Input name="Last Name:" onChange={this.personInfoHandler} />
                    <div>
                        <Button onClick={this.props.startNew}>New Game</Button>
                        <Button onClick={this.sendData} disabled={!this.state.isValid}>Save Results</Button>
                    </div>
                </div>
                
               
            </div>): <Redirect to={{ pathname: "/stats", state: {game: this.props.game} }} /> 
            } 
            </>
    )}
    
}

export default FinishGame
