import React from 'react'
import classes from './Cell.css'

const Cell = ({ cell, onToggleMarked, onClick, isFinished }) => {

    const clazz =[ 'fa'] 
    let content = null
    let style = {color: ''} 

    if(cell.open){
          style = !cell.epicenter ? {backgroundColor: '#ccc'}:{backgroundColor: 'red'}
    }

    if(cell.isMine && cell.open && !cell.marked){
        clazz.push('fa-bomb')
    }

    if(cell.value > 0 && cell.open ){
        content = cell.value
    }

    if(cell.marked && !cell.open){
        clazz.push('fa-flag')
    }

    if(isFinished && cell.marked && !cell.isMine){
        clazz.splice(1,1)
        clazz.push('fa-times')
    }
  
    if( cell.value>0 && cell.open){
        switch(cell.value){
            case 1:
                style.color = 'blue'
            break;
            case 2:
                style.color = 'green'
            break;
            case 3:
                style.color = 'red'
            break;
            case 4:
                style.color ='darkblue'
            break;
            case 5:
                style.color = 'maroon'
            break;
            case 6:
                style.color = '#009D9D'
            break;
            case 7:
                style.color = 'black'
            break;
            case 8:
                style.color = '#6b6b6b'
            break;
            default:
        }
    }
    
    
    return (
        <div className={classes.Cell }
             onContextMenu={ (e)=>onToggleMarked(cell.id, e)}
             onClick={!isFinished?(e)=>onClick(cell.id, e):null}
             style={style}
             >
            {!cell.marked && !cell.isMine ? content : <i className={ clazz.join(' ') }  
                style={ cell.marked ? {color: 'red'} : {color: 'black'} } ></i> }
            
        </div>
    )
}

export default Cell
