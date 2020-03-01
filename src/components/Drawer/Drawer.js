import React from 'react'
import classes from './Drawer.css'
import BackDrop from '../UI/BackDrop/BackDrop'
import {Link} from 'react-router-dom'

const Drawer = props => {
   const cls = [classes.Drawer]
   const clsButton = ['fa']
    if(props.isOpen){
         clsButton.push('fa-times')
         cls.push(classes.open)
        }else {
             clsButton.push('fa-bars')
             cls.push(classes.close)
            }
    return (
            <>
                <div className={cls.join(' ')}>
                    <i onClick={props.openDrawer} className={clsButton.join(' ')}></i>
                    <ul onClick={props.openDrawer}>
                        <Link style={{ textDecoration: 'none' }}
                              to={"/"}
                        >
                            <li>Games</li>
                        </Link>

                        <Link style={{ textDecoration: 'none' }}
                               to={"/stats"}
                        >
                            <li>Statistics</li>
                        </Link>
                        {/* <Link style={{ textDecoration: 'none' }}
                            to={"/snake-game"}
                        >
                            <li>Snake</li>
                        </Link> */}
                    </ul>
                </div>
              {props.isOpen ? <BackDrop  onClick={props.openDrawer}/> : null}
            </>
    )
}

export default Drawer
