
import React, { Component } from 'react'
import classes from './Snake.css'

import GameArea from './GameArea/GameArea'
import FinishGame from '../../../components/FinishGame/FinishGame'

let interval = null
let tick = false

class Snake extends Component {

    getTargetCords = () => {
        const x = Math.round(Math.random()*49 )* 2
        const y = Math.round(Math.random()*49 )* 2
        return [x, y]
    }

    state = {
        start: false,
        isFinished: false,
        score: 0,
        speed: 250,
        direction: 39,
        targetCords: this.getTargetCords(),
        cordinates: [
            [0, 0],
            [2, 0],
        ]
    }
   
    startGame = () => {
     this.setState({start: true,  isFinished: false, score: 0,}) 
     interval = window.setInterval(this.onKeyDown, this.state.speed)
     document.onkeydown = this.setDirection
    }

    setDirection = (e) => {   
        e.preventDefault()
        if(e  && tick === true){
        e = e || window.event
        switch(e.keyCode){
            case 37:
            if(this.state.direction !== 39){ this.setState({ direction: e.keyCode }) 
             }
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
            default:
            }     
        }
        tick = false
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
            let score = this.state.score + 100

            if(this.state.speed > 30){ speed = this.state.speed - 5}

            this.setState({ targetCords: this.getTargetCords(), speed, score })
            
           window.clearInterval(interval)
           interval = window.setInterval(this.onKeyDown, this.state.speed)
            return true
        }
    }

    gameOver() {
        this.setState({
            start: false,
            speed: 250,
            direction: 39,
            cordinates: [
                [0, 0],
                [2, 0],
            ],
            isFinished: true,
        }) 
        document.onkeydown = null
    }

    onKeyDown = () => {  
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
            default:
        }
        if(!this.checkArea(snakeHead) && !this.checkSelfHit(snakeHead)){
           if(!this.checkTargetHit(snakeHead)){
            snakeCords.shift()
           }
            snakeCords.push(snakeHead)
            this.setState({
                cordinates: snakeCords
              })
              tick = true
        }else {
            window.clearInterval(interval)
            const timeout = window.setTimeout(()=>{
                this.gameOver()
                window.clearTimeout(timeout)
           }, 1200)
         
        }
           
    }

    render() {
        return (
                <div className={classes.Snake}>
                    {!this.state.isFinished
                     ? <GameArea 
                     setDirection={this.setDirection}
                     score={this.state.score}
                     cordinates={this.state.cordinates}
                     start={this.state.start}
                     handleTime={this.handleTime}
                     targetCords={this.state.targetCords}
                     startGame={this.startGame}
                    />
                     : <FinishGame startNew={this.startGame} score={this.state.score} />
                    }
                </div>
        )
    }
}

export default  Snake
