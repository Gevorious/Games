import React from 'react'
import classes from './StatsList.css'
import ListItem from '../ListItem/ListItem'

const StatsList = ({ leaderboard }) => {

    return (
        <ol className={classes.StatsList}>
           { leaderboard.map((player, index) => {
               return(
                <ListItem  key={index}  player={player} />
               )
           })}
        </ol>     
    )
}

export default StatsList
