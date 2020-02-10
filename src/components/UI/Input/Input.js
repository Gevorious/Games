import React from 'react'
import classes from './Input.css'

const Input = props => {
    console.log(props.name)
    return (
        <>
            <label htmlFor={props.name} >{props.name}</label>
            <input className={classes.Input} name={props.name} type ="text" />
        </>
    )
}

export default Input
