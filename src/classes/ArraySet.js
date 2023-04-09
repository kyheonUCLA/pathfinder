export default class ArraySet {
  constructor() {
    this.set = [];
  }

  push(item) {
    if (!this.set.includes(item)) {
      this.set.push(item);
    }
  }

  pop() {
    return this.set.pop();
  }

  shift() {
    return this.set.shift();
  }

  length() {
    return this.set.length;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  delete(item) {
    this.set = this.set.filter(element => element !== item);
  }

  has(item) {
    return this.set.includes(item);
  }

  [Symbol.iterator]() {
    let current = this.set[1];
    const last = this.set[this.set.length - 1];

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    }
  }

  copy() {
    const clone =  new ArraySet();
    clone.set = [...this.set];
    return clone;
  }
}