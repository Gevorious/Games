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
                    saveResults, 
                    rows,
                    cols}) => {

    const styleContent = {
        width: cols*25 +'px',
        height: rows*25 +'px'
    }
    const styleBoard = {
        width: cols*25 + 20 +'px',
        height: rows*25 + 60 +'px'
    }

    let content = null
    let header = <Header text="" ></Header>

    if (!started){
            content = <Button onClick={ startGame } size='30'>Start</Button>
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
            <div className={classes.MineField} style={styleBoard}>
                { header }
                <div className={classes.Content} style={styleContent}>
                { content }
                </div>
            </div>
      
    )
}

export default MineField
