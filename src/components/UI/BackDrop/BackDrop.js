import React from 'react'
import classes from './BackDrop.css'

const BackDrop = props => {
    return (
        <div
        onClick={props.onClick}
        className={classes.BackDrop}
        >       
        </div>
    )
}

export default BackDrop
