import { useState, useEffect } from "react";

const Cell = ({grid, cell}) => {

    const [vertex, setVertex] = useState(cell);

    
    useEffect( () => {
        if (vertex.location === 1) {console.log(vertex);}
    }, [vertex])

    const onCellClick = (e) => {
        const newVertex = vertex.copy(); // creates and returns new reference copy of prev state
        newVertex.cycleClass(); // changes the class value of object
        grid.cells[newVertex.location] = newVertex; //makes sure pointer is pointing to updated data
        setVertex(newVertex); //uses stateHook to set new reference as state, re-rendering components
    }

    
    if (!vertex) {return <div></div>}
     return (
        <div className={vertex.getTailwindStyle()} onClick={onCellClick}>
            {vertex.location}
        </div>
    )
}

export default Cell;