import React, { Component } from 'react'
import classes from './Stats.css'
import axios from 'axios'
import Button from '../UI/Button/Button'

export class Stats extends Component {

    state={
        loading: true,
        leaderboard: [],
    }

    componentDidMount(){
        this.getData('personList')
    }

     getData(name){
           
            axios.get(`https://memorino-8206d.firebaseio.com/${name}.json`)
                       .then(res => {
                         this.handleResponse(res.data)
                       })
                       .catch(err => {
                          console.log(err)
                       })              
            }

        sortResponse = leaders => {
            if(isNaN(leaders[0].result)){
                leaders.sort((a,b) => {
                    return  Number(a.result.replace(/:/g,'')) - Number(b.result.replace(/:/g,''))
                  })
            }else {
                leaders.sort((a,b) => {
                    return   b.result - a.result 
                  })
            }
        }

        handleResponse = data => {
            const keys = Object.keys(data)
            const leaders = []

            if(data) {                
               keys.map(key => {
                    const person = data[key]                  
                    return   leaders.push(person)                   
                })
            }

           this.sortResponse(leaders)

            this.setState({
                loading: false,
                leaderboard: leaders
            })
        }

    render() {  
        return (
            <div className={classes.Stats}>
                <h1>Leaderboard</h1>
                <div className={classes.ButtonDiv}>
                    <Button onClick={() => this.getData('personList')} disabled={false}>Memory Game</Button> 
                    <Button onClick={() => this.getData('snakeGame')} disabled={false}>Snake Game</Button>
                </div>
                { this.state.loading
                ? <div className={'loader'}><div className={classes.ldsring}><div></div><div></div><div></div><div></div></div></div> ////Loading
                : <ol>
                   { this.state.leaderboard.map((leader, index) => {
                       return(
                        <li key={index} id={index}> { leader.firstName + ' ' + leader.lastName }
                            <strong>{ leader.result }</strong>
                        </li>
                       )
                   })}
                  </ol>                 
                }               
            </div>
        )
    }
}

export default Stats
