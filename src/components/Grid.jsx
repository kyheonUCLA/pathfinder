import Cell from "./Cell"
import { useState, useEffect} from "react";

const Grid = ({grid, onClick}) => {
  
  
  return (
    <div className={grid.getTailwindStyle()} onClick={onClick}>
      { 
      grid.cells.map( (v) => { 
        return (<Cell key={v.location} grid={grid} cell={v}/>)      
        })
      }
    </div>
  )
}

export default Grid; 