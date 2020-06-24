import React from 'react'
import classes from './Header.css'
import Button from '../UI/Button/Button'

const Header = props => {
    let content = null
    
    if(props.end){
        content  =  (<>
                        {props.text}
                        <Button onClick={props.saveResults} disabled={props.disableSave}>Save Results</Button>
                        <Button onClick={props.startGame}>Start New</Button>
                    </>)
       
    } else {
        content = props.children
    }

    return ( 
        <div className={classes.Header}>
            {content}
        </div>
    )
}

export default Header
