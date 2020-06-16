import React from 'react'
import classes from './Card.css'

const Card = props => {
    const cls = [classes.Card, classes[props.cardState]]
    if(props.cardState === 'Front'){
        cls.push(classes[props.img])
    }  

    return (
        <div 
        className={cls.join(' ')}
        onClick={()=>props.cardFlip(props.id)}
        >     
        </div>
    )
}

export default Card
