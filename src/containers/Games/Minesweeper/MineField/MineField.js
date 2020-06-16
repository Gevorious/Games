import React from 'react'
import classes from './MineField.css'
import Cell from '../Cell/Cell'
import Timer from '../../../../components/Timer/Timer'
import Button from '../../../../components/UI/Button/Button'

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
    let header = null

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
    header = <><Timer handleTime={ handleTime }/><div className={classes.Flags}>{mineCount - flaggedCount}</div></>
    }
    if(isFinished && !win){
        header = <>Boom! You Lost! <Button onClick={ startGame }>Start New?</Button> </>
    }
    if(win){
        header = <>Yay! You Win! <Button onClick={ startGame }>Start New?</Button> <Button onClick={ saveResults }>Save Results</Button></>
    }
    return (
        <>
            <div className={classes.TimerDiv}>
               {header}
            </div>

            <div className={classes.MineField}>
                { content }
            </div>
        </>
    )
}

export default MineField
