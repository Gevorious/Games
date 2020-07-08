import React from 'react'
import classes from './ListItem.css'

const ListItem = ({ player }) => {
    return (
        <li className={classes.ListItem}> 
            { player.firstName + ' ' + player.lastName }
            <strong>{ player.result }</strong>
        </li>
    )
}

export default ListItem
