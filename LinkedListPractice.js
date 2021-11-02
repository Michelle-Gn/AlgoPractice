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




