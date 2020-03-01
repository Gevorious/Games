import React from 'react'
import classes from './Navigation.css'
import {Link} from 'react-router-dom'


const Navigation = props => {
    return (
        <div className={classes.Navigation}>
          <li> <Link to={props.url} style={{ textDecoration: 'none' }}>{props.children}</Link></li>
        </div>
    )
}

export default Navigation
