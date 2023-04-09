
export default class CellVertex {
  constructor(_location, _class) { 
    this.class = _class;
    this.location = _location;
    this.edges = [];
    this.traversed = false;
  }

  setClass(_class) {
    if (_class < 4 && _class >= 0) {
    this.class = _class
    } else {
    console.log("Class must be between 0 - 3")
    }
  }

  cycleClass() {
    this.class = (this.class + 1) % 4;
  }

  addEdge(loc) {
    if (!this.edges.includes(loc)) {
      this.edges.push(loc);
    }
  }

  removeEdge(loc) {
    this.edges = this.edges.filter(item => item !== loc );
  }

  traverse() {
    this.traversed = true;
  }

  //returns current 
  getColor() {
    if (this.traversed && !this.isStart() && !this.isEnd()) {return "bg-red-300"}
    switch(this.class) {
      case 0:
        return "bg-white"
      case 1:
        return "bg-gray-500"
      case 2:
        return "bg-red-500"
      case 3:
        return "bg-green-400"    
    }
  }

  getTailwindStyle() {
    const baseStyle = "flex justify-center items-center border-2 border-black rounded-xl";
    return `${baseStyle} ${this.getColor()}`
  }

  isStart() {
    return this.class === 3;
  }

  isEnd() {
    return this.class === 2;
  }

  isBarrier() {
    return this.class === 1;
  }

  copy() {
    const clone = new CellVertex(this.location, this.class);
    clone.traversed = this.traversed;
    clone.edges = [...this.edges];
    return clone;
  }
}
