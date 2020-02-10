import classes from './Timer.css'
import React, { Component } from 'react'

let interval = null

class Timer extends Component {
        state = {
            timer: '00:00'
        }

        date = new Date()

    setTimer = () =>{
        const currentDate = new Date()
        const differece = currentDate - this.date
        let currentMins = new Date(differece).getMinutes()
        let currentSec = new Date(differece).getSeconds()
        if(currentMins < 10) { 
            currentMins = '0' + currentMins
        }
        if(currentSec<10) { 
            currentSec = '0' + currentSec 
        }
        this.setState({
            timer: currentMins + ":" + currentSec
        })

    }

    render() {
        return (
            <div className={classes.Timer}>   
               Time: {this.state.timer}
            </div>
        )
    } 
    componentDidMount() {
        interval = setInterval(() => {
            this.setTimer()
        }, 1000);
    }

    componentWillUnmount () {
        this.props.handleTime(this.state.timer)
        clearInterval(interval)
    }
}

export default Timer
