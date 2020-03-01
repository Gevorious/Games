import React from 'react'
import classes from './SnakeDot.css'

const SnakeDot = props => {
    let content = null
    content = props.cordinates.map((cordinate, index) => {
    return  (<div 
            key={index}
            className={classes.SnakeDot}
            style = {{left: cordinate[0] +'%', top: cordinate[1] + '%'}}
            >
            </div>)
    })

    return (
        <>
       {content}
       </>
    )
}

export default SnakeDot
