import React, { Component } from 'react'
import classes from './Layout.css'
import Drawer from '../../components/Drawer/Drawer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  Stats  from '../../components/Stats/Stats';
import MemoryGame from '../../containers/Games/MemoryGame/MemoryGame'
import Snake from '../../containers/Games/Snake/Snake';
import Gamelist from '../../containers/GameList/Gamelist';


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
                              <Route path="/" exact component={Gamelist} />
                              <Route path="/stats" component={Stats} />
                              <Route path="/snake-game" exact component={Snake} />
                              <Route path="/memory-game" exact component={MemoryGame} /> 
                            </Switch>
                        </Router>
                    </div>            
            )
        }
    }
    return Layout   
}

export default withLayout
