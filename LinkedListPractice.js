// const n1 = {
//   data: 100
// } 

const n2 = {
  data: 200
}

// n1.next = n2; 

// console.log(n1.next); 
// console.log('n1', n1); 

class Node {
  constructor(key, value) {
    this.key = key; 
    this.value = value; 
    this.prev = null;
    this.next = null; 
  }
}

const n1 = new Node(100); 
// Here n1 is an instance of the Node class
console.log('n1', n1);
// n1.next = n2; 
// console.log('n1', n1);  

class LinkedList {
  constructor () {
    this.head = null; 
    this.size = 0; 
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size += 1; 
  }

  insertLast(data) {
    let node = new Node(data); 
    if (this.head === null) {
      this.head = node; 
    } else {
    let current = this.head; 
      while (current.next) {
        current = current.next;
      } 
      current.next = node; 
      this.size += 1; 
    }
  }

  // add method to print list
  printLinkedList() {
    let current = this.head; 
    while (current) {
      console.log(current.data); 
      current = current.next; 
    }
  }
}

let node = new Node(1,1); 
console.log(node); 

// Classes 



class Node {
  constructor (value, tail) {
    this.value = value; 
    this.tail = tail; 
  }
}


var removeNthFromEnd = function(head, n) {
    var nNode = findLength(head) - n; 
    var current = head; 
    var previous; 
    
    if(nNode === 0) {
        head = head.next; 
        return head; 
    }
    
    while (nNode > 0) {
        previous = current; 
        current = current.next; 
        nNode --; 
    }
    
    previous.next = current.next; 
    return head; 
};

// node 1 = {val: 1, next: node 2}
// node 2 = {val: 2, next: node 3}
// node 3 = {val: 3, next: node 4}
// node 4 = {val: 4, next: node 5}
// node 5 = {val: 5, next: null}

// prev = node 1, current = node 2, node = 2
// prev = node 2, current = node 3

var findLength = function (head) {
    let length = 0; 
    let current = head; 
    
    while (current !== null) {
        length ++; 
        current = current.next; 
    }
    
    return length; 
}

