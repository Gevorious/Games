/* eslint-disable default-case */
import React, { Component } from 'react'
import classes from './Snake.css'
import Button from '../../UI/Button/Button'
import SnakeDot from './SnakeDot'
import Target from './Target'

let interval = null

class Snake extends Component {

    getTargetCords = () => {
        const x = Math.floor(Math.random() * 52/2)*2
        const y = Math.floor(Math.random() * 52/2)*2
        return [x, y]
    }

    state = {
        start: false,
        speed: 300,
        direction: 39,
        targetCords: this.getTargetCords(),
        cordinates: [
            [0, 0],
            [2, 0],
            [4, 0],
        ]
    }
   
    startGame = () =>{
     this.setState({start: true})
        document.onkeydown = this.setDirection;
        interval = window.setInterval(this.onKeyDown, this.state.speed)
    }

    setDirection = (e) => {
        e.preventDefault()
        e = e || window.event
        switch(e.keyCode){
            case 37:
                if(this.state.direction !== 39){ this.setState({ direction: e.keyCode }) }
                break;
                case 38:
                if(this.state.direction !== 40){ this.setState({ direction: e.keyCode }) }
                break;
                case 39:
                if(this.state.direction !== 37){ this.setState({ direction: e.keyCode }) }
                break;
                case 40:
                if(this.state.direction !== 38){ this.setState({ direction: e.keyCode }) }
                break;
        }
    }

    checkArea = snakeHead => {
        if(snakeHead[0] < 0 || snakeHead[1] > 98 || snakeHead[1] < 0 || snakeHead[0] > 98){
            return true
        }else {
            return false
        }
    }

    checkSelfHit = (snakeHead) => {
        let state = false
        let snakeCords = [...this.state.cordinates]
        snakeCords.pop()
        snakeCords.forEach(cord => {
            if(snakeHead[0] === cord[0] && snakeHead[1] === cord[1]){
                state = true
            }
        })
       return state
    }

    checkTargetHit = (snakeHead) => {
        if(snakeHead[0] === this.state.targetCords[0] && snakeHead[1] === this.state.targetCords[1]){
            let speed = 30
            if(this.state.speed > 30){ speed = this.state.speed - 10}
            this.setState({ targetCords: this.getTargetCords(), speed })
            window.clearInterval(interval)
            interval = window.setInterval(this.onKeyDown, this.state.speed)
            return true
        }
    }

    gameOver() {
        this.setState({
            start: false,
            speed: 300,
            direction: 39,
            targetCords: this.getTargetCords(),
            cordinates: [
                [0, 0],
                [2, 0],
                [4, 0],
            ]
        })
        window.clearInterval(interval)
    }

    onKeyDown = (e) => {       
        let snakeCords = [...this.state.cordinates]
        let snakeHead = snakeCords[snakeCords.length - 1]

            switch(this.state.direction){
             case 37:
              snakeHead = [snakeHead[0] - 2, snakeHead[1]]
                break;
             case 38:
                snakeHead = [snakeHead[0], snakeHead[1] - 2]
                break;
             case 39:
                snakeHead = [snakeHead[0] + 2, snakeHead[1]]
                break;
             case 40:
                snakeHead = [snakeHead[0], snakeHead[1] + 2]
                break;
            }
            if(!this.checkArea(snakeHead) && !this.checkSelfHit(snakeHead)){
               if(!this.checkTargetHit(snakeHead)){
                snakeCords.shift()
               }
                snakeCords.push(snakeHead)
                this.setState({
                    cordinates: snakeCords
                  })
            }else {
               this.gameOver()
            }
    }

    render() {
        return (
            <div className={classes.Snake}>
                {
                !this.state.start
                ? <Button onClick={this.startGame}>Start</Button>
                : <>
                    <Target cordinate ={this.state.targetCords} />
                    <SnakeDot cordinates={this.state.cordinates} />
                  </>
                }          
            </div>
        )
    }
}

export default  Snake
