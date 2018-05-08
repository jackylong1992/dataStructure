// constructor class for each node in linked list
function Node(data) {
    this.data = data;
    this.next = null;
  }

// constructor class for linked list
function SinglyLinkedList () {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  
// add new node to the TAIL of linked list: NOTE: add in the tail
  SinglyLinkedList.prototype.add = function(data) {
    var node = new Node(data);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  };

// remove node with value == param value : NOTE: remove all node if there are more nodes with equal value
  SinglyLinkedList.prototype.remove = function(data) {
    var previous = this.head;
    var current = this.head;
    while(current) {
      if(current.data === data) {
        if(current === this.head) {
          this.head = this.head.next;
        }
        if(current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.numberOfValues--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  };

  // insert one node after one node - NOTE: the after node is detect by value ( not index), and add to ALL node, not first meet
  SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
    var current = this.head;
    while(current) {
      if(current.data === toNodeData) {
        var node = new Node(data);
        if(current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
        }
        this.numberOfValues++;
      }
      current = current.next;
    }
  };
  // loop through all the node and implement param action
  SinglyLinkedList.prototype.traverse = function(fn) {
    var current = this.head;
    while(current) {
      if(fn) {
        fn(current);
      }
      current = current.next;
    }
  };
  // get length
  SinglyLinkedList.prototype.length = function() {
    return this.numberOfValues;
  };
  // print to console.log
  SinglyLinkedList.prototype.print = function() {
    var string = '';
    var current = this.head;
    while(current) {
      string += current.data + ' ';
      current = current.next;
    }
    console.log(string.trim());
  };
// DEMO USE
//   var singlyLinkedList = new SinglyLinkedList();
//   singlyLinkedList.print(); // => ''
//   singlyLinkedList.add(7);
//   singlyLinkedList.add(3);
//   singlyLinkedList.add(5);
//   singlyLinkedList.add(7);
//   singlyLinkedList.print(); // => 1 2 3 4
//   singlyLinkedList.remove(3); // remove node with value = 3
//   singlyLinkedList.print();
//   singlyLinkedList.insertAfter(3, 7); // insert node with value = 3 after node with value = 7
//   singlyLinkedList.print(); 
//   singlyLinkedList.traverse(function(node) { console.log(node.data); });
//   console.log('length is:', singlyLinkedList.length());
module.exports = SinglyLinkedList;