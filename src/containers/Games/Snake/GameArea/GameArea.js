import React from 'react'
import classes from './GameArea.css'

import SnakeDot from '../SnakeDot'
import Button from '../../../../components/UI/Button/Button'
import Target from '../Target'
import Header from '../../../../components/Header/Header'


const GameArea = props => {

    let content = null
    if (!props.start){
        content = <Button onClick={props.startGame}>Start</Button>
        } else{
            content = <> 
                        <Target cordinate ={props.targetCords} />
                        <SnakeDot cordinates={props.cordinates} />
                      </>
                       
        }
    return (
        <div className={classes.GameArea}>
            <Header text="Game Over" 
                   end={props.isFinished}
                   start={props.start} 
                   startGame={props.startGame} 
                   saveResults={ props.saveResults}>
                 {props.start ? `Score: ${props.score}` : null } 
            </Header>
            <div className={classes.Content}>
               { content }
            </div>
        </div>
    )
}

export default GameArea
