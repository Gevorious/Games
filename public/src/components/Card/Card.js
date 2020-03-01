import React from 'react'
import classes from './Card.css'

const Card = props => {
    const cls = [classes.Card, classes[props.cardState]]
    return (
        <div 
        className={cls.join(' ')}
        onClick={()=>props.cardFlip(props.id)}
            
        >
           {props.cardState==='Front' ? props.content : null }
        </div>
    )
}

export default Card
