// Custom Classes
import CellGraph from "./classes/CellGraph";
import { bfs, dfs } from "./classes/Algorithms"

// Custom Components
import Grid from "./components/Grid";
import RowButton from "./components/RowButton";
import ColButton from "./components/ColButton";
import FindPathButton from "./components/FindPathButton";


// React Tools
import React from "react";
import { useState, useEffect, useMemo } from "react";


function App() {

  const [graph, setGraph] = useState(null); 
  const [algorithm, setAlgorithm] = useState(null);
  
  const [gridCol, setGridCol] = useState(6);
  const [gridRow, setGridRow] = useState(5);

  useEffect( () => {
    setGraph(new CellGraph(gridRow, gridCol));
  }, [gridCol, gridRow])

  //debuggig useEffect
  useEffect( () => {
    console.log(graph)
  }, [graph])

  const onRowPlus = () => {setGridRow( prev => prev + 1 )}
  const onRowMinus = () => {setGridRow( prev => prev - 1 )}
  const onColPlus = () => {setGridCol( prev => prev + 1 )}
  const onColMinus = () => {setGridCol( prev => prev - 1 )}


  const onGridClick = (e) => {
    const newGraph = graph.copy();
    newGraph.update();
    setGraph(newGraph);
    //console.log(newGraph.cells);
  }

  const onBtnClick = (e) => {
    graph.resetTraverse();
    graph.update();
    const visited = bfs(graph, graph.getStart().location);
    //const visited = dfs(graph, graph.getStart().location);

    console.log(visited)

    //probably a better way to do this 
    for (let i = 0; i < visited.length; i++) {
      setTimeout(()=>{
        graph.traverse(visited[i]);
        setGraph(graph.copy());
      }, i * 250)
    }
  }


  if (!graph) {return <div></div>};
  return (
    
    <div className="flex flex-col h-screen">
      <ColButton onClick={[onColMinus, onColPlus]}/>
      <div className="flex-1 flex">
        <RowButton onClick={[onRowMinus, onRowPlus]}/>
        <Grid grid={graph} onClick={onGridClick}/>
      </div>
      <FindPathButton onClick={onBtnClick}/>

    </div>
  )

}

export default App;
