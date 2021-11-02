class MyLinkedList {
    constructor() {
       this.head = null;
       this.size = 0;
    }
  
  addAtHead(val) {
      let node = new Node(val, this.head); 
      this.head = node; 
      this.size ++; 
  }

 addToTail(val, next) {
   let node = new Node(val, next); 
   if (this.head === null) {
     this.head = node; 
   }
   let current = this.head;  
   while (current.next) {
     current = current.next
   }
   current.next = node; 
   this.size ++; 
 }

 addAtIndex(val, index) {
   let node = new Node (val);
   let current = this.head; 
   let previous; 
   let count = 0; 
   
   if (index === this.size) {
     this.addToTail(val); 
     this.size ++; 
     return; 
   }

   if (index > this.size) {
     return; 
   }

   while (count < index) {
     previous = current; 
     count ++; 
     current = current.next
   }

   node.next = current; 
   previous.next = node; 
   this.size ++; 
 }

 deleteAtIndex(index) {
   if (index > (this.size + 1)) {
     return;
   }

   let current = this.head; 
   let previous; 
   let count = 0; 
   if (index === 0) {
     this.head = current.next; 
   } else {
      while (count < index) {
       count ++;
       previous = current; 
       current = current.next; 
      }
      previous.next = current.next; 
   }
    this.size --; 
 }

 get(index) {
   
 }

 printValues() {
   let current = this.head; 
   while (current !== null) {
     console.log(current.value); 
     current = current.next
   }
 }
}

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

let ll = new MyLinkedList; 
ll.addAtHead(500); 
ll.addAtHead(200);
ll.addToTail(300, null);
ll.addAtIndex(100, 3);
ll.deleteAtIndex(3);  
ll.printValues(); 

//{value: 500, next: {value: 200, next: null}}
// 200, 500, 100, 300