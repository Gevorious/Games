import React, { Component } from 'react'
import classes from './MemoryGame.css'

import Dashboard from './Dashboard/Dashboard'
import FinishGame from '../../../components/FinishGame/FinishGame'

class MemoryGame extends Component {

        counter = 0;
        turn = true
        cardCount = 24

        generateCards =(length)=> {
            const cards = []
            let imgNum = 1
            let id = 1
            for(let i=0; i<length; i++){
                cards.push( {img: `img_${imgNum}`, id: id, cardState: 'Back'})
                id++
                if(i%2===1){ imgNum++}
            }
            return cards
        }

        state={
            time: null,
            activeCards: [],
            start: false,
            stopTimer: true,
            isFinished: false,
            cardContent: this.generateCards(this.cardCount)
        }  

    cardFlipHandler = cardId => { 
       const cards = [...this.state.cardContent]
       const activeCards = [...this.state.activeCards]
      
        cards.forEach(card => {

            if(card.id === cardId && card.cardState === 'Back' && activeCards.length < 2){
                card.cardState = 'Front'
                activeCards.push(card)
             }                
        })

       this.setState({ cardContent: cards, activeCards })

        if(activeCards.length === 2 && this.turn){
            this.turn=false
            this.checkMatching(activeCards)
        }

    }

    shuffleCards = () => { 
        const cards = [...this.state.cardContent].sort(() => Math.random() - 0.5)
        cards.forEach(card => { card.cardState = 'Back'}) 
       
            this.setState({
                stopTimer: false,
                isFinished: false,
                cardContent: cards,
                start: true
                })
            
    }

    checkMatching = activeCards => {
      
        if(activeCards[0].img === activeCards[1].img){         
            this.setState({ activeCards: [] })
            this.counter++
            this.turn=true  
        } else {
         const timeout = window.setTimeout(()=>{
             this.flipBackHandler(activeCards)
             this.turn=true  
             window.clearTimeout(timeout)
        }, 1000)
          }

        if(this.counter >= this.state.cardContent.length/2){
            this.setState({stopTimer: true})
            const timeout2 = window.setTimeout(()=>{
                this.finishGame()
                window.clearTimeout(timeout2)
           }, 1200)
        }
       
    }
    
    flipBackHandler = activeCards => {
        const cards = [...this.state.cardContent]

        cards.forEach(card => {
            if(card.id === activeCards[0].id || card.id === activeCards[1].id){
                card.cardState = 'Back'
            }
        })

        this.setState({
            cardContent: cards,
            activeCards: []
        })
    } 

    finishGame = () => {
        this.setState({
            isFinished: true,
            activeCards: [],
            start:false
        })  
        this.counter = 0  
    }

    handleTime = time => {
            this.setState({ time })      
    }
   
    render() {
        return (           
            <div className={classes.MemoryGame}>                       
               {
               this.state.isFinished 
               ? <FinishGame game={"Memory_Game"} startNew={this.shuffleCards} time={this.state.time} />
               : <Dashboard
                 stopTimer={this.state.stopTimer}
                 cardList={this.state.cardContent}
                 cardFlip={this.cardFlipHandler} 
                 start={this.state.start}
                 shuffleCards={this.shuffleCards}
                 handleTime={this.handleTime}
                 />
                }
            </div>

        )
    }
}

export default MemoryGame
