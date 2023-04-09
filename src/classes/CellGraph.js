import CellVertex from "./CellVertex";

export default class CellGraph {
  constructor(_rows, _cols) {
    this.rows = _rows;
    this.cols = _cols;
    this.cells = new Array(_rows * _cols);

    // creating starting grid
    for (let i = 0; i < this.cells.length; i++) {
      let cellClass = 0;
      if (i == 0) {cellClass = 3};
      if (i == this.cells.length-1) {cellClass = 2};

      this.cells[i] = new CellVertex(i, cellClass)
    }
    this.resetEdges();    
  }

  getEnd() {
    for (const cell of this.cells) {
      if (cell.isEnd()) {
        return cell;
      }
    }
  }

  getStart() {
    for (const cell of this.cells) {
      if (cell.isStart()) {
        return cell;
      }
    }
  }

  update() {
    this.resetEdges();
    return this;
  }

  traverse(i) {
    this.cells[i].traverse();
    return this;
  }

  isBoundaryTop(i) {
    return (i < this.cols);
  }
  isBoundaryBot(i) {
    return (i + this.cols > this.cells.length - 1);
  }
  isBoundaryLeft(i) {
    return (i % this.cols === 0);
  }
  isBoundaryRight(i) {
    return (i % this.cols === this.cols-1);
  }

  isBoundary(i) {
    return this.isBoundaryBot(i) || this.isBoundaryTop(i) || this.isBoundaryLeft(i) || this.isBoundaryRight(i)
  }

  //assumes row > 1 and cols > 1
  // resets the edges of each cellNode in the graph according to updated config
  resetEdges() {
    for (let i = 0; i < this.cells.length; i++) {    
      if (this.cells[i].isBarrier()) { 
        for (const loc of this.cells[i].edges) {
          this.cells[loc].removeEdge(i);
        }
        this.cells[i].edges = [];
        continue;
      }
      
      // case: Top Row
      if (this.isBoundaryTop(i)) {
        if (this.isBoundaryRight(i)) {
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        } else if (this.isBoundaryLeft(i)) {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}    
        } else {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}  
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        }
        if (!this.cells[i+this.cols].isBarrier()) {this.cells[i].addEdge(i+this.cols)}          
      }

      // case: Bottom Row
      if (this.isBoundaryBot(i)) {
        if (this.isBoundaryRight(i)) {
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        } else if (this.isBoundaryLeft(i)) {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}          
        } else {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}          
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        }
        if (!this.cells[i-this.cols].isBarrier()) {this.cells[i].addEdge(i-this.cols)}          
      }

      // case: Middle Rows
      if (!this.isBoundaryBot(i) && !this.isBoundaryTop(i)) {
        if (this.isBoundaryLeft(i)) {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}          
        } else if (this.isBoundaryRight(i)) {
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        } else {
          if (!this.cells[i+1].isBarrier()) {this.cells[i].addEdge(i+1)}          
          if (!this.cells[i-1].isBarrier()) {this.cells[i].addEdge(i-1)}          
        }   
        if (!this.cells[i+this.cols].isBarrier()) {this.cells[i].addEdge(i+this.cols)}          
        if (!this.cells[i-this.cols].isBarrier()) {this.cells[i].addEdge(i-this.cols)}          
      }
    }
  }

  resetTraverse() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].traversed = false;
    }
  }

  getTailwindStyle() {
    const baseStyle = "grid grid-flow-dense border-2 bg-gray-700 mx-auto w-[35rem] h-[40rem]";
    return `${baseStyle} grid-cols-${this.cols} grid-rows-${this.rows}`;
  }

  copy() {
    const clone = new CellGraph(this.rows, this.cols);
    for (let i = 0; i < clone.cells.length; i++) {
      clone.cells[i] = this.cells[i]; //we dont generate a new copy of each individual cell; violates react expected updates
    }
    return clone;
  }
}
  
