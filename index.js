// 1. substring must contain same letter frequency as pattern
// 2. Keep track of substring's min length 
// 3. Track matched letters
// 3. Keep hashmap of pattern's frequency
// 4. Decrement hashmap at rightChar if in pattern
// 5. If matched letters === keys in hashmap then we found pattern


// 6. shrink window while pattern is present
// 7. Track window start and window end

// const find_substring = function(str, pattern) {
//   // Write your code here
//   let minLength = Infinity; 
//   let substring = ''; 
//   let matched = 0; 
//   let windowStart = 0; 

//   let map = {};
//   for (var i = 0; i < pattern.length; i++) {
//     let char = pattern[i]; 
//     if (map[char] === undefined) {
//       map[char] = 1; 
//     } else {
//       map[char] ++; 
//     }
//   }

//   for (var windowEnd = 0; windowEnd < str.length; windowEnd ++) {
//     let rightChar = str[windowEnd];
//     if (rightChar in map) {
//       map[rightChar] -- ; 
//     } 
//     if (map[rightChar] === 0) {
//       matched ++; 
//     }
    
//     while (matched === Object.keys(map).length) {
//       if (windowEnd - windowStart + 1 < minLength) {
//         substring = str.substring(windowStart, windowEnd + 1);
//         minLength = windowEnd - windowStart + 1; 
//       }
//       let leftChar = str[windowStart]; 
//       windowStart ++; 
//       if (leftChar in map) {
//         if (map[leftChar] === 0) {
//           matched --;  
//         }
//         map[leftChar] ++; 
//       }
//     }
//   }

//   return substring; 

//   // return "";
// }

// // 'abbca'
// // abbc
// // 

// console.log(find_substring("aabdec", "abc")); 
// // Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// {a: 1, b: 0, c: 0}
// ws= 1, we=5, matched = 2, minLength = 5, substring = 'abdec'
// a => 
// a => 
// b => 
// d => 
// e => 
// c => 

// d=> 

// Practice with Linked List

// const n1 = {
//   data: 100; 
// }; 

// const n2 = {
//   data: 200
// }

// n1.next = n2; 



// {value : 1, next: {value: 2, next: null}}


// let deleteThree = function (string) {
//   let stack = []; 
//   for (var i = 0; i < string.length; i++) {
//     let currentLetter = string[i]; 
//     // if current letter is third letter 
//     if (stack[stack.length - 1] === currentLetter && stack[stack.length - 2] === currentLetter) {
//       // delete last 2 letters from stack 
//       stack.pop(); 
//       stack.pop(); 
//     } else {
//       stack.push(currentLetter); 
//     }
//     console.log('stack', stack); 
//   }
//   return stack.join(''); 
// }




// let input = 'aabbbaccddddc'; 
// console.log(deleteThree(input)); 

// merge

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }


// function merge(intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   // sort the intervals on the start time
//   intervals.sort((a, b) => a.start - b.start);

//   const mergedIntervals = [];
//   let start = intervals[0].start,
//     end = intervals[0].end;
//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) { // overlapping intervals, adjust the 'end'
//       end = Math.max(interval.end, end);
//     } else { // non-overlapping interval, add the previous interval and reset
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   // add the last interval
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// }


// process.stdout.write('Merged intervals: ');
// result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }


// [[1,4], [2,6], [3,5]]
// sort => [[1,4], [2,6], [3,5]]

// merged = [[1, 6]], start=1, end=6 
// i = 1 => [2,6] 
// i = 2 => [3,5]
// return [1, 6]

// 1. sort
// 2. create storage for returned collection
// 3. create initial start and end 
// 4. check if there is overlap (if current start < end)
// 5. if overlap: extend end 
// 6. if no overlap: add current start and end to collection, set start to current start and end to current end 
// 7. after going through whole collection add the last interval 
// 8. return collection 


// const array = [15, 16, 17, 18, 19];

// const reducer = (a, b) => a + b; 

// console.log(array.reduce(reducer, 0)); 


// const c = compose(a, b);
// c(x) === a(b(x));

// let a = (x) => 2 * x; 
// let b = (x) => 3 * x; 

// let c = function (a, b) {
//   let functions = [a, b]; 
//   let reducer = (a, b) => a(b(x)); 
//   return functions.reduceRight(reducer); 
// }



class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function find_cycle_length(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}


function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;

console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// let node1 = {val: 1, next: node2}
// let node2 = {val: 2, next: node3}
// let node3 = {val: 3, next: node4}
// let node4 = {val: 4, next: node5}
// let node5 = {val: 5, next: node6}
// let node6 = {val: 6, next: null}



