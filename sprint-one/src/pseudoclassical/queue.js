// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.head];
  delete this.storage[this.head];
  this.head += 1;
  return val;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};