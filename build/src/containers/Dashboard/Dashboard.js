import React from 'react'
import Card from '../../components/Card/Card'
import classes from './Dashboard.css'
import Button from '../../components/UI/Button/Button'
import Timer from '../../components/Timer/Timer'

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
            <div className={classes.Dashboard}>
                {props.start ? <Timer handleTime={props.handleTime}/> : null }
                {content}
            </div>
    )
}

export default Dashboard

