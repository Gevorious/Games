import React from 'react'
import classes from './GameArea.css'

import SnakeDot from '../SnakeDot'
import Button from '../../../../components/UI/Button/Button'
import Target from '../Target'


const GameArea = props => {
    
    return (
        <>
        <div className={classes.Score}> {props.start ? `Score - ${props.score}` : null }</div>
       
        <div className={classes.GameArea}>
           {
           !props.start
            ?<Button onClick={props.startGame}>Start</Button>
            :<>
            <Target cordinate ={props.targetCords} />
            <SnakeDot cordinates={props.cordinates} />
            </>
           }
        </div>
        
        </>
    )
}

export default GameArea
