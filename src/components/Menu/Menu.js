import React from 'react'
import classes from './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={classes.Menu}>
            <ul>
                <Link to={"/"}>
                    <li>GAMES</li>
                </Link>
                <Link to={{pathname: "/stats/", state: { game: 'Memory_Game' }}}>
                    <li>STATS</li>
                </Link>
                <Link to={"/about/"}>
                    <li>ABOUT US</li>
                </Link>
            </ul>
        </div>
    )
}

export default Menu
