import React from 'react'
import classes from './Target.css'

const Target = props => {
    const cordinate = props.cordinate
    return (
        <div 
        className={classes.Target}
        style = {{ left: cordinate[0] +'%', top: cordinate[1] + '%'}}
        >    
        </div>
    )
}
export default Target
