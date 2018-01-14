var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    //for in loop:
    //look in list for node that has node.next === null
    //set that node.next === our new node
    var currentnode = Node(value);
    if (list.head === null) {
      list.head = currentnode;
      list.tail = currentnode;
    } else {
      list.tail.next = currentnode;
      list.tail = currentnode;
    }


    // at the node that just had the tail
    //set that nodes .next to the new node
    // if there is a node that has tail prop then set new node as list.tail
    // node.next = list.head
  };

  list.removeHead = function() {
    var storage = list.head
    list.head = list.head.next


    return storage.value;
  };

  list.contains = function(target) {
    var currentHead = this.head;
    while (currentHead) {
      if (target === currentHead.value) {
        return true;
      } else {
        currentHead = currentHead.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */