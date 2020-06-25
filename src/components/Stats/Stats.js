import React, { Component } from 'react'
import classes from './Stats.css'
import Tab from '../UI/Tab/Tab'
import APIService  from '../../Services/API/APIService' 
import Organizer from '../../Services/DataOganizerServices/DataOganizerServices'

export class Stats extends Component {

    game = this.props.location.state ? this.props.location.state.game : "Memory_Game"   
    APIService = new APIService()
    Organizer = new Organizer()
    
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
        this.setState({ activeTab: tubName }, () => {
            this.getData(this.state.activeTab)   
        })
    }

    getData(game){ 
        this.APIService.getData(game).then(
            this.handleResponse
        )       
    }

    sortResponse = leaders => { this.Organizer.sort(leaders)  }
    
    handleResponse = data => {
        const leaders = this.Organizer.transformData(data)
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
                    <Tab onClick={() => { this.switchTab("Memory_Game") }} name="Memory_Game" tab={this.state.activeTab}>Memory Game</Tab> 
                    <Tab onClick={() => { this.switchTab("Snake") }} name="Snake" tab={this.state.activeTab}>Snake Game</Tab>
                    <Tab onClick={() => { this.switchTab("Minesweeper") }} name="Minesweeper" tab={this.state.activeTab}>Minesweeper</Tab>
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
