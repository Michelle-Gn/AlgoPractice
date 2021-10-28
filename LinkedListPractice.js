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
  constructor(data, next = null) {
    this.data = data; 
    this.next = next; 
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
    // check for edge case, if linkedlist is empty
    if (this.head === null) {
      this.head = node; 
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; 
      }
      current.next = node; 
    }
  }

  // add method to print list
  printLinkedList() {
    let current = this.head; 
    while (current) {
      console.log(current.data)
      current = current.next; 
    }
  }
}

let ll = new LinkedList(); 
ll.insertFirst(100); 
ll.insertFirst(200); 
ll.insertLast(300); 
ll.insertFirst(500); 
ll.printLinkedList(); 

