import React from 'react'
import classes from './Games.css'
import { Link } from 'react-router-dom'

const Games = () => {
    return (
        <div className={classes.Games}>  
            <ul>
                <li>  <Link to={"/dashboard"} >Memory Card Game</Link></li>
            </ul>
        </div>
    )
}

export default Games
