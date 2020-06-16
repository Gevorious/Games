import React from 'react'
import classes from './Input.css'

const Input = props => {

    return (
        <>
            <label htmlFor={props.name} >{props.name}</label>
            <input className={classes.Input} name={props.name} 
                   type ="text" onChange={props.onChange}
            />
        </>
    )
}

export default Input
