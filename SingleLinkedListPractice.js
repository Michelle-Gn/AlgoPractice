class MyLinkedList {
    constructor() {
       this.head = null;
       this.size = 0;
    }
   // return node at index
 get(index) {
   let count = 0; 
   let current = this.head; 
   // if index is out of range 
   if (index > (this.size - 1)) {
     // returne -1; 
     return -1; 
   } else {
   // else traverse linked list until at index
     while (count < index) {
       current = current.next; 
       count ++; 
     }
     // return current node
     console.log(`value at index ${index}`, current.value); 
     return current.value; 
   }
 }
  
addAtHead(val) {
  let node = new Node(val, this.head); 
    this.head = node; 
    this.size ++; 
}

 addAtTail(val, next) {
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
   return; 
 }

 addAtIndex(index, val) {
   let node = new Node (val);
   let current = this.head; 
   let previous; 
   let count = 0; 

   if (index > this.size || index < 0) {
     return; 
   }
   
   if (index === this.size) {
     this.addAtTail(val); 
     this.size ++; 
     return; 
   }

   if (index === 0) {
     this.addAtHead(val); 
     return; 
   }

   while (count < index) {
     previous = current; 
     console.log('previous', previous); 
     count ++; 
     current = current.next; 
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



 printValues() {
   let current = this.head; 
   while (current !== null) {
     console.log(current.value); 
     current = current.next
   }
 }
}

// class Node {
//     constructor(value, next = null) {
//         this.value = value; 
//         this.next = next; 
//     }
// }


let ll = new MyLinkedList; 

// ll.addAtTail(1); 
// ll.addAtTail(3); 
// ll.get(0); // 20

//{value: 500, next: {value: 200, next: null}}
// 200, 500, 100, 300


class ListNode{
    constructor(key, val){
        this.key = key; //key => used to get value from node Or used to lookup an item in the hashtable to delete
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

let node = new ListNode(1, 1); 

console.log('node', node); 

let map = new Map(); 
console.log('map', map ); 
console.log('map get', map.get); 

