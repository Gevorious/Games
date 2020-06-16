import React from 'react'
import classes from './Tab.css'

const Tab = props => {
    const cls = [classes.Tab]
    if(props.tab === props.name){   
            cls.push(classes.active)
    }

    return (   
        <div tabIndex="-1" className={cls.join(' ')} onClick={props.onClick} >
            {props.children}
        </div>
    )
}

export default Tab
