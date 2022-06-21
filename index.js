class SortedList {
  constructor() {
  this.items  = [];
  this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.length++;
  this.items.sort(function(a, b){return a - b});
  return this.items;
  }

  get(pos) {
  if(pos > this.length){
    throw new Error('OutOfBounds');
  }
  return this.items[pos];
  }

  max() {
  if(this.items == 0){
    throw new Error('EmptySortedList');
  } 
  return Math.max(...this.items);
  }

  min() {
  if(this.items == 0){
    throw new Error('EmptySortedList');
  } 
  return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
