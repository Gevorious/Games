import React from 'react'
import classes from './Dashboard.css'

import Card from '../Card/Card'
import Timer from '../../../../components/Timer/Timer'
import Button from '../../../../components/UI/Button/Button'
import Header from '../../../../components/Header/Header'

const Dashboard = props => {
    let content = null
    if (!props.start){
        content = <Button onClick={props.startGame}>Start</Button>
        } else{   
             content = props.cardList.map(card =>{ 
                        return <Card 
                        key={card.id}
                        cardFlip={props.cardFlip}
                        { ...card }
                        />
                    })
            }   

    return (
            <div className={classes.Dashboard}>
                <Header text="Game Over" end={props.isFinished} start={props.start} startGame={props.startGame} saveResults={ props.saveResults}> 
                    { !props.stopTimer ? <Timer handleTime={props.handleTime}/> : null } 
                </Header>
                <div className={classes.Content}>
                    { content }
                </div>  
            </div>
    )
}

export default Dashboard

