import React from 'react'
import classes from './MineField.css'
import Cell from '../Cell/Cell'
import Timer from '../../../../components/Timer/Timer'
import Button from '../../../../components/UI/Button/Button'
import Header from '../../../../components/Header/Header'

const MineField = ({cells, 
                    onToggleMarked, 
                    onClick, 
                    stopTimer, 
                    handleTime, 
                    started, 
                    startGame, 
                    isFinished,
                    win,
                    flaggedCount,
                    mineCount,
                    saveResults}) => {

    let content = null
    let header = <Header text="" ></Header>

    if (!started){
            content = <Button onClick={ startGame }>Start</Button>
        } else{
            content = cells.map((cell, index) => { 
            return <Cell key={index} 
                         cell={ cell } 
                         isFinished={isFinished}
                         onToggleMarked={ onToggleMarked } 
                         onClick={onClick}
                         /> 
            })
    }

    if(!stopTimer){
        header = <Header text="Boom! You Lost!" end={isFinished} start={started} startGame={startGame} saveResults={ saveResults } disableSave={true}>
                    <Timer handleTime={ handleTime }/>
                    <div className={classes.Flags}>
                        {mineCount - flaggedCount}
                    </div>
                 </Header>
    }

    if(win){
        header = <Header text="Yay! You Won!" end={win} start={started} startGame={startGame} saveResults={ saveResults }></Header>
    }
    return (
        
            // <div className={classes.TimerDiv}>
             
            // </div>

            <div className={classes.MineField}>
                { header }
                <div className={classes.Content}>
                { content }
                </div>
            </div>
      
    )
}

export default MineField
