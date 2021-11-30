class Node{
  constructor (value, next) {
    this.value = value; 
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null; 
    this.size = 0; 
  }

  prepend(value) {
    let node = new Node (value, this.head);
    this.head = node;
    this.size ++;   
  }

  append(value) {
    let node = new Node (value, null);
    let current = this.head; 
    if (this.size === 0) {
      this.prepend(value); 
      this.size ++; 
    } else {
      while (current.next !== null) {
        current = current.next; 
      }
      current.next = node;
      this.size ++;  
    }
  }

  addAtIndex(index, value) {
    let node = new Node (value); 
    // if index is out of range 
    if (index > (this.size - 1) || index < 0) {
      // do nothing 
      return; 
    }
    
    // if index is 0, insert at head
    if (index === 0) {
      this.prepend(value); 
      return; 
    }
    // else 
    let counter = 0; 
    let current = this.head;
    let previous; 
    // traverse linked list until index node
    while (counter < index) {
      // keep track of previous node and current node
      previous = current; 
      current = current.next; 
      counter ++
    }
      // add node 
      node.next = current;
      previous.next = node; 
      
      // increase size
      this.size ++; 
  }

  deleteAtIndex(index) {
    // if index is out of range
    if (index > (this.size - 1) || this.size < 0) {
      // do nothing 
      return; 
    }
    // if index is 0
    if (index === 0) {
      // set head to head.next
      this.head = this.head.next; 
      this.size --; 
      return; 
    }    
    // else 
    // keep track of previous node and current node
    let current = this.head; 
    let previous; 
    let counter = 0; 
    while (counter < index) {
      previous = current;
      current = current.next; 
      counter ++; 
    }
    previous.next = current.next; 
    this.size --; 

  }

  get(index) {
    // if index is out of range 
    if (index < 0 || index > (this.size - 1)){
      return; 
    } else {
     // traverse linked list until at index
     let counter = 0; 
     let current = this.head; 
     while (counter !== index) {
       current = current.next; 
       counter ++; 
     } 
      // print current 
      console.log(current.value); 
    }
      
  }

  print() {
    let current = this.head; 
    while (current) {
      console.log(current.value); 
      current = current.next; 
    }
  }
}

let ll = new LinkedList; 
ll.prepend(200); 
ll.append(300); 
ll.prepend(100); 
ll.addAtIndex(1, 500); 
ll.deleteAtIndex(2); 
ll.print(); 

ll.get(0); 

