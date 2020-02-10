import React, { Component } from 'react'
import classes from './MemoryGame.css'
import Dashboard from '../Dashboard/Dashboard'
import FinishGame from '../../components/FinishGame/FinishGame'

class MemoryGame extends Component {

        state={
            counter: 0,
            time: null,
            activeCards: [],
            start: false,
            isFinished: false,
            cardContent: [
                {letter: 'A', id: 1, cardState: 'Back',},
                {letter: 'A', id: 2, cardState: 'Back',},
                {letter: 'B', id: 3, cardState: 'Back',},
                {letter: 'B', id: 4, cardState: 'Back',},
                {letter: 'C', id: 5, cardState: 'Back',},
                {letter: 'C', id: 6, cardState: 'Back',},
                {letter: 'D', id: 7, cardState: 'Back',},
                {letter: 'D', id: 8, cardState: 'Back',}, 
                {letter: 'E', id: 9, cardState: 'Back',},
                {letter: 'E', id: 10, cardState: 'Back',},
                {letter: 'F', id: 11, cardState: 'Back',},
                {letter: 'F', id: 12, cardState: 'Back',},
                {letter: 'G', id: 13, cardState: 'Back',},
                {letter: 'G', id: 14, cardState: 'Back',},
                {letter: 'H', id: 15, cardState: 'Back',},
                {letter: 'H', id: 16, cardState: 'Back',},
                {letter: 'I', id: 17, cardState: 'Back',},
                {letter: 'I', id: 18, cardState: 'Back',},
                {letter: 'J', id: 19, cardState: 'Back',},
                {letter: 'J', id: 20, cardState: 'Back',},
                {letter: 'K', id: 21, cardState: 'Back',},
                {letter: 'K', id: 22, cardState: 'Back',},
                {letter: 'L', id: 23, cardState: 'Back',},
                {letter: 'L', id: 24, cardState: 'Back',},          
            ]
        }  

        // componentDidMount(){
        //     this.setState({
        //         counter: 0,
        //         activeCards: [],
        //         start: false,
        //         isFinished: false,
        //     })
        // }
            

    cardFlipHandler = cardId => {       
        const cards = this.state.cardContent
        const activeCards = this.state.activeCards

        cards.forEach(card => {
            if(card.id === cardId && card.cardState === 'Back' && activeCards.length < 2){
                card.cardState = 'Front'
                activeCards.push(card)

                if(activeCards.length === 2){
                    this.checkMatching(activeCards)
                }
             }                
        })

        this.setState({
            cardContent: cards,
        })
    }

    shuffleCards = () => {
       
        const cards = this.state.cardContent.sort(() => Math.random() - 0.5)
        cards.forEach(card => { card.cardState = 'Back'})
        
        return(
        this.setState({
            isFinished: false,
            cardContent: cards,
            start: true
        })
        )
    }

    checkMatching = activeCards => {
        let counter = this.state.counter

        if(activeCards[0].letter === activeCards[1].letter){         
            activeCards = []
            counter++
        } else {
         const timeout = window.setTimeout(()=>{
             this.flipBackHandler(activeCards)
             window.clearTimeout(timeout)
        }, 1200)
          }

        if(counter !== this.state.cardContent.length/2){
        this.setState({
         activeCards,
         counter
         })
        }  else{
         this.setState({
         isFinished: true,
         activeCards,
         counter: 0,
         start:false
         })
        }
    }
    
    flipBackHandler = activeCards => {
        const cards = this.state.cardContent

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
            start: false
        })
    }

    handleTime = (time) => {
        return(
            this.setState({
           time
            })
        )
    }
   
    render() {
        return (
            <div className={classes.MemoryGame}>                         
                   {this.state.isFinished 
                   ? <FinishGame startNew={this.shuffleCards} time={this.state.time} />
                   : <Dashboard
                     isFinished={this.state.isFinished}
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
