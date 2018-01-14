var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    store[someInstance.size(storage)] = value;
  };

  someInstance.pop = function() {
    var val = storage[someInstance.size() - 1];
    return val;
  };

  someInstance.size = function() {
    return object.keys(storage).length;
  };

  return someInstance;
};