var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = function(value) {
    var newChild = Tree(value);
    newTree.children.push(newChild);
  };
  newTree.contains = function(target) {
    if (newTree.value === target) {
      return true;
    }
    if (newTree.children.length) {
      for (var i = 0; i < newTree.children.length; i++) {
        if (newTree.children[i].contains(target)) {
          return true;
        }
      }
    }
    return false;
  };
  return newTree;
};

var tree = Tree(0);
tree.addChild(1);
tree.addChild(2);
tree.contains(2);