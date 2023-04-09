// Custom Classes
import CellGraph from "./classes/CellGraph";

// Component elements
import Grid from "./components/Grid";

// React elements
import React from "react";
import { useState, useEffect, useMemo } from "react";

// Algorithms
import { bfs, dfs } from "./classes/Algorithms"

function App() {

  const [graph, setGraph] = useState(null); 

  useEffect( () => {
    setGraph(new CellGraph(5, 6));
  }, [])

  useEffect( () => {
    console.log(graph)
  }, [graph])

  const onGridClick = (e) => {
    const newGraph = graph.copy();
    newGraph.update();
    setGraph(newGraph);
    //console.log(newGraph.cells);
  }

  const onBtnClick = (e) => {
    //graph.resetTraverse();
    graph.update();
    const visited = bfs(graph, graph.getStart().location);
    //const visited = dfs(graph, graph.getStart().location);

    console.log(visited)
    for (let i = 0; i < visited.length; i++) {
      setTimeout(()=>{
        graph.traverse(visited[i]);
        setGraph(graph.copy());
      }, i * 250)

      
    }
    //setGraph(graph.copy());
  }

  if (!graph) {return <div></div>};
  return (
    <div className="flex items-center justify-center h-screen">
      <Grid grid={graph} onClick={onGridClick}/>

      <button className="bg-blue-300 mx-auto hover:bg-green-500 rounded-xl border-4 hover:border-fuchsia-600
      h-20 w-32" onClick={ onBtnClick }>Click Me</button>
    </div>
  )

}

export default App;
