import React, { Component } from 'react'
import classes from './Layout.css'
import Drawer from '../../components/Drawer/Drawer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import  Stats  from '../../components/Stats/Stats';
import MemoryGame from '../../containers/Games/MemoryGame/MemoryGame'
import Snake from '../../containers/Games/Snake/Snake';
import Gamelist from '../../containers/GameList/Gamelist';
import Menu from '../../components/Menu/Menu';
import Minesweeper from '../../containers/Games/Minesweeper/Minesweeper';
import FinishGame from '../../components/FinishGame/FinishGame';
import LeaderboardRenderer from '../../components/Stats/LeaderboardRenderer/LeaderboardRenderer';

const withLayout = (WrappedComponent) => {
    class Layout extends Component{
        state={
            isOpen: false
        }

        toggleDrawer = () => {
            this.setState(({ isOpen }) => {
               return { isOpen: !isOpen }
            })
        }
        render() {
            return (      
                <div className={classes.Layout}>
                    <WrappedComponent />
                    <Router>
                        <Menu />
                        <Drawer 
                         isOpen={this.state.isOpen}
                         toggleDrawer={this.toggleDrawer}
                        />   
                        <Switch>
                          <Route path="/" exact component={Gamelist} />
                          <Route path="/stats" exact component={Stats} />
                          <Route path="/stats/:id" component={LeaderboardRenderer} />
                          <Route path="/finish" exact component={FinishGame} /> 
                          <Route path="/snake-game" exact component={Snake} />
                          <Route path="/memory-game" exact component={MemoryGame} /> 
                          <Route path="/minesweeper" exact component={Minesweeper} /> 
                          <Route path="/about"/>
                          <Redirect to="/" />
                        </Switch>
                    </Router>
                </div>            
            )
        }
    }
    return Layout   
}

export default withLayout
