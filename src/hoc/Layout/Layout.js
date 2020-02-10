import React, { Component } from 'react'
import classes from './Layout.css'
import Drawer from '../../components/Drawer/Drawer'
import MemoryGame from '../../containers/MemoryGame/MemoryGame';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  Stats  from '../../components/Stats/Stats';

const withLayout = (WrappedComponent) => {
    class Layout extends Component{
        state={
            isOpen: false
        }

        openDrawer = () => {
            const drawerState = this.state.isOpen
            this.setState({
                isOpen: !drawerState
            })
        }
        render() {
            return (      
                    <div className={classes.Layout}>
                        <WrappedComponent />
                        <Router>
                            <Drawer 
                             isOpen={this.state.isOpen}
                             openDrawer={this.openDrawer}
                            />   
                            <Switch>
                              <Route path="/" exact component={MemoryGame} />
                              <Route path="/stats" component={Stats} />
                            </Switch>

                        </Router>
                         
                        
                    </div>            
            )
        }
    }
    return Layout   
}

export default withLayout
