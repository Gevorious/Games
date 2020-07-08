import React from 'react'
import classes from './Tab.css'

const Tab = props => {
    const cls = [classes.Tab]
    if(props.activeTab === props.name){   
            cls.push(classes.active)
    }

    return (   
        <div  className={cls.join(' ')} onClick={props.onClick} >
            {props.children}
        </div>
    )
}

export default Tab
