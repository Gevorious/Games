import React, { Component } from 'react'
import classes from './Stats.css'
import APIService  from '../../Services/API/APIService' 
import Organizer from '../../Services/DataOganizerServices/DataOganizerServices'

import LeaderboardRenderer from './LeaderboardRenderer/LeaderboardRenderer'

export class Stats extends Component {

    game = this.props.location.state ? this.props.location.state.game : "Memory_Game"
    
    APIService = new APIService()
    Organizer = new Organizer()
    
    state={
        loading: true,
        leaderboard: [],
        activeTab: this.game,
    }

    componentDidMount(){ 
        this.getData(this.state.activeTab)  
    }

    switchTab = (tubName) => { 
        this.setState({ activeTab: tubName }, () => {
            this.getData(this.state.activeTab)   
        })
    }

    getData(game){ 
        this.APIService.getData(game).then(res=>{
            this.handleResponse(res)
            }   
        )       
    }
    
    handleResponse = data => {
        if(!data){
            this.setState({loading: true})
        }else{
            const leaders = this.Organizer.transformData(data)
            this.Organizer.sort(leaders)
            this.setState({
                loading: false,
                leaderboard: leaders
            })
        }
        
    }

    render() { 
         const { leaderboard, loading,  activeTab } = this.state
        return (
            <div className={classes.Stats}>
                <h1>Leaderboard</h1>
                <LeaderboardRenderer leaderboard={ leaderboard } 
                                     loading={loading} 
                                     switchTab={this.switchTab} 
                                     activeTab={activeTab}
                />             
            </div>
        )
    }
}

export default Stats
