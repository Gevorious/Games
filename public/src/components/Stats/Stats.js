import React, { Component } from 'react'
import classes from './Stats.css'
import axios from 'axios'

export class Stats extends Component {

    state={
        loading: true,
        leaderboard: []
    }

     componentDidMount(){
             axios.get(`https://memorino-8206d.firebaseio.com/personList.json`)
                       .then(res => {
                         this.handleResponse(res.data)
                       })
                       .catch(err => {
                          console.log(err)
                       })              
            }

        sortResponse = leaders => {
            leaders.sort((a,b) => {
              return  Number(a.time.replace(/:/g,'')) - Number(b.time.replace(/:/g,''))
            })
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
                { this.state.loading
                ? <div className={'loader'}><div className={classes.ldsring}><div></div><div></div><div></div><div></div></div></div>
                : <ol>
                   { this.state.leaderboard.map((leader, index) => {
                       return(
                        <li key={index}> { leader.firstName + ' ' + leader.lastName }
                            <strong>{ leader.time }</strong>
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
