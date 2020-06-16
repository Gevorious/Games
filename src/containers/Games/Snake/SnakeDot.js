import React from 'react'
import classes from './SnakeDot.css'

const SnakeDot = props => {
    let content = null
    content = props.cordinates.map((cordinate, index) => {
    return  (<div 
            key={index}
            style = {{ left: cordinate[0] +'%', top: cordinate[1] + '%'}}
            className={classes.SnakeDot}
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
