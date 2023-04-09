
// Breadth Fist Search on Undirected/Unweighted graph
const bfs = (graph, start) => {
    const visited = [];
    const queue = [start];
    visited.push(start);
    
    while (queue.length > 0) {
        const i = queue.shift();
        if (graph.cells[i].isEnd()){
            break;
        }
        for (const loc of graph.cells[i].edges) {
            if (!visited.includes(loc)) {
                visited.push(loc);
                queue.push(loc);
            }
        }
    }
    return visited;
}

// Depth Fist Search on Undirected/Unweighted graph (something wrong with this algorithm)
const dfs = (graph, node, visited=[]) => {
    if (!visited.includes(node)) {
        visited.push(node);
    }
    
    if (graph.cells[node].isEnd()) {
        return visited;    
    } else {
        for (const edge of graph.cells[node].edges) {
            if (!visited.includes(edge)) {
                const traveled = dfs(graph, edge, visited);
                if (traveled) { //makes sure all recursive calls end after finding the end
                    return visited;
                }
            }
        }
    }

    
    return visited;
}

const dijkstra = (graph, start) => {
   //doesnt make sens to use for unweighted graphs
}

const astar = (graph, start) => {
    //superset of dijkstras's
}

export { bfs, dfs }

