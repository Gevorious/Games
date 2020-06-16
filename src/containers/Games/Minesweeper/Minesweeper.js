import React, { Component } from 'react'
import classes from './Minesweeper.css'
import MineField from './MineField/MineField'
import FinishGame from '../../../components/FinishGame/FinishGame'

class Minesweeper extends Component {

    cellCount = 384
    mineCount = 70
    style='{bacgroundColor: "red"}'

    generateCells = (length) => {
        let id = 0
        let x = 0
        let y = 1
        const cellArr = []
       
        for(let i=0; i<length; i++){
 
            if ( x < 24 ){ x++ }
                else { y++; x=1 }

            cellArr.push({ cordinates: [x,y], isMine: false, open: false, value: 0,  id: id++, marked: false })
        }
        return cellArr
    }

    state={
        time: null,
        cellArr: this.generateCells(this.cellCount),
        started: false,
        stopTimer: true,
        isFinished: false,
        saveResults: false,
        flaggedCount: 0,
        win: false
    }

    startGame = () => {
        this.setState({  
        time: null,
        cellArr: this.generateCells(this.cellCount),
        started: true,
        stopTimer: true,
        isFinished: false,
        saveResults: false,
        win: false,
        flaggedCount: 0
     })
    }

    saveResults = () => {
        this.setState({saveResults: true})
    }

    onGameWin = ()=>{
        const cells = JSON.parse(JSON.stringify(this.state.cellArr))
        const openned = cells.filter(el=>el.open===true).length
        const wrongFlags = cells.filter(el=>el.marked && !el.isMine).length

        if(openned===(this.cellCount-this.mineCount) && wrongFlags===0){
            this.setState({win: true})
        }

    }

    onClick = (id, e) => {
        let cells = JSON.parse(JSON.stringify(this.state.cellArr))
        const idx = cells.findIndex(el=> el.id === id)
        let counter = JSON.parse(JSON.stringify(this.state.flaggedCount))
        const cell = cells[idx]

        if(this.state.stopTimer && !cell.marked){
            cells=this.generateMines(cell, cells)
            this.setState({ stopTimer: false })
        } 
        if(cell.value===0 && !cell.marked){
            this.revealEmpty(idx, cells)
        }
        if(cell.value>0 && !cell.marked){
            this.openCell(idx, cells)
        }

        if(cell.isMine && !cell.marked){
           this.gameOver(cells)
           cell.epicenter = true
           this.setState({ isFinished: true })
        }

        this.setState({ cellArr: cells }, () => {
            if(counter===this.mineCount){
                this.onGameWin()
            }
        })
    }

    gameOver = (cells) => {
        cells.forEach(cell => cell.isMine === true && !cell.marked ? cell.open=true : cell)
        return cells
    }

    openCell = (idx, cells) => {
        cells[idx].open = true
    }

    revealEmpty = (idx, cells) => {
        let area = this.getNeighbours(idx, cells);

        area.forEach(value => {
            if (!value.marked && !value.open && !value.isMine) {
                const idx = cells.findIndex(cell => cell.id === value.id)
                cells[idx].open = true;
            if (value.value === 0) {
                 this.revealEmpty(idx, cells);
            }
        }})
    }

    getNeighbours = (idx, cells)=>{
        const neighbourCells = []
        const x = cells[idx].cordinates[0]
        const y = cells[idx].cordinates[1]
        let cellIdx

       
        cellIdx = cells.findIndex(el => el.cordinates[0] === x && el.cordinates[1] === y)
        neighbourCells.push(cells[cellIdx])
   
        if( x>1 && y>1 ){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x-1 && el.cordinates[1] === y-1)
            neighbourCells.push(cells[cellIdx])
        }
        if( y>1 ){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x && el.cordinates[1] === y-1)
            neighbourCells.push(cells[cellIdx])
        }
        if( x<24 && y>1 ){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x+1 && el.cordinates[1] === y-1)
            neighbourCells.push(cells[cellIdx])
        }
        if( x>1 ){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x-1 && el.cordinates[1] === y)
            neighbourCells.push(cells[cellIdx])
        }
        if(x<24){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x+1 && el.cordinates[1] === y)
            neighbourCells.push(cells[cellIdx])
        }
        if(x>1 && y<16){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x-1 && el.cordinates[1] === y+1)
            neighbourCells.push(cells[cellIdx])
        }
        if(y<16){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x && el.cordinates[1] === y+1)
            neighbourCells.push(cells[cellIdx])
        }
        if(x<24 && y<16){
            cellIdx = cells.findIndex(el => el.cordinates[0] === x+1 && el.cordinates[1] === y+1)
            neighbourCells.push(cells[cellIdx])
        }

        return neighbourCells
    }

    generateMines = (cell, cells) => {
        const mineArr = []
        let counter = 0

        while(counter<this.mineCount){
            const idx = Math.round(Math.random()*(this.cellCount-1))    
            if( cells[idx].id === cell.id || cells[idx].isMine ){
               continue
            }
            cells[idx].isMine = true
            cells[idx].value = -1
            mineArr.push(cells[idx])
            counter++
        }
         mineArr.forEach(mine => {this.setNumbers(mine, cells)}) 
        return cells
    }

    setNumbers = (mine, cells) => {
       
        let x = mine.cordinates[0]
        let y = mine.cordinates[1]
        let idx
            
            if( x>1 && y>1 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x-1 && cell.cordinates[1] === y-1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( y>1 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x && cell.cordinates[1] === y-1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( x<24 && y>1 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x+1 && cell.cordinates[1] === y-1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( x>1 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x-1 && cell.cordinates[1] === y)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( x<24 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x+1 && cell.cordinates[1] === y)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            
            if( x>1 && y<16 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x-1 && cell.cordinates[1] === y+1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( y<16 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x && cell.cordinates[1] === y+1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
            if( x<24 && y<16 ){
                idx = cells.findIndex(cell => cell.cordinates[0] === x+1 && cell.cordinates[1] === y+1)
                if(!cells[idx].isMine){
                    cells[idx].value++
                }
            }
    }
    
    onToggleMarked = (id, e) => {
        e.preventDefault()
        const cells = JSON.parse(JSON.stringify(this.state.cellArr))
        const idx = cells.findIndex(el => el.id === id)
        let counter = JSON.parse(JSON.stringify(this.state.flaggedCount))
        
        if(!cells[idx].open && !this.state.isFinished){
           cells[idx].marked = !cells[idx].marked
           if(cells[idx].marked){
            counter++
           }else{
            counter--
           }

           if(counter===this.mineCount){
               this.onGameWin()
           }
        }
        this.setState({ cellArr: cells, flaggedCount: counter })  
    }

    handleTime = (time) => {
            this.setState({ time })
        }

    render() {  
        const {cellArr, stopTimer, isFinished, started, win, flaggedCount, saveResults }=this.state
        return (
            <div className={classes.Minesweeper}>
                {saveResults ? <FinishGame game={"Minesweeper"} startNew={this.startGame} time={this.state.time} />
                     : <MineField 
                        mineCount={this.mineCount}
                        saveResults={this.saveResults}
                        win={win}
                        isFinished={isFinished}
                        started={ started }
                        startGame={this.startGame}
                        stopTimer={ stopTimer }
                        cells={ cellArr } 
                        onToggleMarked={ this.onToggleMarked } 
                        onClick={ this.onClick }
                        handleTime={this.handleTime}
                        flaggedCount={flaggedCount}
                    />
                }
              
            </div>
        )
    }
}

export default Minesweeper
