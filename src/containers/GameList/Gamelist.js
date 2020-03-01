import React from 'react'
import classes from './GameList.css'

import Navigation from '../../components/Navigation/Navigation'

const Gamelist = () => {
    return (
        <div className={classes.GameList}>
            <Navigation url="/memory-game" >Memory Card Game</Navigation>
            <Navigation url="/snake-game" >Snake Game</Navigation> 
        </div>
    )
}

export default Gamelist
