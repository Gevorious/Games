import React, { Component } from 'react'
import classes from './Stats.css'
import axios from 'axios'
import Tab from '../UI/Tab/Tab'

export class Stats extends Component {

    game = this.props.location.state ? this.props.location.state.game : "Memory_Game"
    
    
    state={
        loading: true,
        leaderboard: [],
        activeTab: this.game,
        done: false
    }

    componentDidMount(){  
        this.getData(this.state.activeTab)
    }

    switchTab(tubName){ 
        this.setState({ activeTab: tubName })     
    }

    async getData(name){ 
        await axios.get(`https://fun-games-46704.firebaseio.com/${name}.json`)
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
                    return leaders.push(person)                   
                })
            }

            this.sortResponse(leaders)

            this.setState({
                loading: false,
                leaderboard: leaders
            })
        }

    render() { 
         const leaderboard = [...this.state.leaderboard]
        return (
            <div className={classes.Stats}>
                <h1>Leaderboard</h1>
                <div className={classes.TabsDiv}>
                    <Tab onClick={() => { this.getData('Memory_Game'); this.switchTab("Memory_Game") }} name="Memory_Game" tab={this.state.activeTab}>Memory Game</Tab> 
                    <Tab onClick={() => { this.getData('Snake'); this.switchTab("Snake") }} name="Snake" tab={this.state.activeTab}>Snake Game</Tab>
                    <Tab onClick={() => { this.getData('Minesweeper'); this.switchTab("Minesweeper") }} name="Minesweeper" tab={this.state.activeTab}>Minesweeper</Tab>
                </div>
                { this.state.loading
                ? <div className={'loader'}><div className={classes.ldsring}><div></div><div></div><div></div><div></div></div></div> ////Loading
                : <ol>
                   { leaderboard.map((leader, index) => {
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
