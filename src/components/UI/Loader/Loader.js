import React from 'react'
import classes from './Loader.css'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.ldsring}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
