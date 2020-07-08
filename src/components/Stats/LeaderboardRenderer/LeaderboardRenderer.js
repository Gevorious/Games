import React from 'react'
import classes from './LeaderboardRenderer.css'

import Tab from '../../UI/Tab/Tab'
import Loader from '../../UI/Loader/Loader'
import StatsList from '../StatList/StatsList'

const LeaderboardRenderer = ({loading, leaderboard, activeTab, switchTab}) => {

    return (
        <>
            <div className={classes.TabsDiv}>
                <Tab onClick={() => switchTab("Memory_Game")} name="Memory_Game" activeTab={activeTab}>Memory Game</Tab> 
                <Tab onClick={() => switchTab("Snake")} name="Snake" activeTab={activeTab}>Snake Game</Tab>
                <Tab onClick={() => switchTab("Minesweeper")} name="Minesweeper" activeTab={activeTab}>Minesweeper</Tab>     
            </div>
            { loading ? <Loader /> : <StatsList  leaderboard={ leaderboard } /> }        
        </>
    )
}

export default LeaderboardRenderer
