import Cell from "./Cell"
import { useState, useEffect} from "react";

const Grid = ({grid, onClick}) => {
  
  //probably should define getTailwindStyle here to make it clearer
  return (
    <div className="flex">
        <div className={grid.getTailwindStyle()} onClick={onClick}>
          { 
          grid.cells.map( (v) => { 
            return (<Cell key={v.location} grid={grid} cell={v}/>)      
            })
          }
        </div>   
      </div> 
  )
}

export default Grid; 