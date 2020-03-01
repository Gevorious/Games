import React from 'react'
import classes from './Dashboard.css'

import Card from '../Card/Card'
import Timer from '../../../../components/Timer/Timer'
import Button from '../../../../components/UI/Button/Button'

const Dashboard = props => {
    let content = null
    if (!props.start){
        content = <Button onClick={props.shuffleCards}>Start</Button>
      
        } else{   
             content = props.cardList.map((card, index) =>{ 
                        return <Card 
                        key={index}
                        id={card.id}
                        content={card.letter}
                        cardFlip={props.cardFlip}
                        cardState={card.cardState}
                        />
                    })
            }   

    return (
            <>
                <div className={classes.Timer}>{!props.stopTimer ? <Timer handleTime={props.handleTime}/> : null }</div>
                <div className={classes.Dashboard}>
                    {content}
                </div>
                
            </>
    )
}

export default Dashboard

