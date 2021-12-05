// const removeDuplicates = function (arr) {
//   // input: array 
//   // output: integer that represents length of unique array
//   // constraints: none
//   // edgecases: array length is one
//   let i = 1; 
//   let nextNonDuplicate = 1; 

//   while (i < arr.length) {
//     let currentNum = arr[i]; 
//     let lastNum = arr[i - 1]; 
//     if (currentNum !== lastNum){
//       nextNonDuplicate += 1; 
//     }
//     i++
//   }
//   return nextNonDuplicate; 
// }

// // [1, 2, 3, 3, 4, 4] 
// // nextUnique = 1 => 2, 
// // nextUnique = 2 => 3,
// // nextUnique = 2 => 3,  
// // nextUnique = 4 => 4,

// let arr = [1, 2, 3, 4]; 
// console.log(removeDuplicates(arr)); 


// const Deque = require('./collections/deque'); //http://www.collectionsjs.com


// function find_subarrays(arr, target) {
//   let result = [],
//     product = 1,
//     left = 0;
//   for (right = 0; right < arr.length; right++) {
//     product *= arr[right];
//     while ((product >= target && left < arr.length)) {
//       product /= arr[left];
//       left += 1;
//     }
//     // since the product of all numbers from left to right is less than the target therefore,
//     // all subarrays from left to right will have a product less than the target too; to avoid
//     // duplicates, we will start with a subarray containing only arr[right] and then extend it
//     const tempList = new Deque();
//     for (let i = right; i > left - 1; i--) {
//       tempList.unshift(arr[i]);
//       result.push(tempList.toArray());
//     }
//   }
//   return result;
// }


// console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));

// // result = []; product = 1; left = 0; target = 30; 
// // product = 1 * 2 => 2 


let removeDuplicates = function(array) {
  let slow = 1, fast = 1; 
    while (fast < array.length) {
      if (array[fast] !== array[slow]) {
        array[slow] = array[fast]; 
        slow ++; 
      } else {
        fast ++; 
      }
    }
    console.log(array); 
    return slow;     
}

console.log(removeDuplicates([1, 1, 2, 3, 4])); 

// [1, 1, 2] => 2 
// slow = 1, fast = 1 
// if array[fast] === unique, increase slow 
// else increase fast 
// return slow 

// array = [1, 1, 2], slow = 2, fast = 2
// 1 => not unique
// 2 => unique 
// return 2 


class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  // TODO: Write your code here
  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
