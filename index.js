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



// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }


// function find_cycle_length(head) {
//   let slow = head,
//     fast = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) { // found the cycle
//       return calculate_cycle_length(slow);
//     }
//   }
//   return 0;
// }


// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       break;
//     }
//   }
//   return cycle_length;
// }


// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = head.next.next;

// console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// let node1 = {val: 1, next: node2}
// let node2 = {val: 2, next: node3}
// let node3 = {val: 3, next: node4}
// let node4 = {val: 4, next: node5}
// let node5 = {val: 5, next: node6}
// let node6 = {val: 6, next: null}


// function search_triplets(arr) {
//   arr.sort((a, b) => a - b);
//   const triplets = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
//       continue;
//     }
//     console.log('target_sum', -arr[i], 'left', i + 1); 
//     search_pair(arr, -arr[i], i + 1, triplets);
//   }

//   return triplets;
// }


// function search_pair(arr, target_sum, left, triplets) {
//   let right = arr.length - 1;
//    console.log('left', left, 'right', right);
//   while (left < right) {

//     const current_sum = arr[left] + arr[right];
//     console.log('triplet', current_sum, arr[left], arr[right]); 
//     if (current_sum === target_sum) { // found the triplet
//       triplets.push([-target_sum, arr[left], arr[right]]);
//       left += 1;
//       right -= 1;
//       while (left < right && arr[left] === arr[left - 1]) {
//         left += 1; // skip same element to avoid duplicate triplets
//       }
//       while (left < right && arr[right] === arr[right + 1]) {
//         right -= 1; // skip same element to avoid duplicate triplets
//       }
//     } else if (target_sum > current_sum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//   }
// }


// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));

// [-5, -2, -1, 2, 3] 
// [-3, -2, -1, 0, 1, 1, 2], triplets = []
// search_pair([-3, -2, -1, 0, 1, 1, 2], 3, 1, [])
// right = 2 

// target = -5 => search [-2 => 3]
// target = -2 => search [-1 => 3]
// target = -1 => search [2 => 3]
// duplicates check => don't check duplicate targets, don't add duplicate pairs
// when left === right => now more pairs to check

// var twoSum = function(nums, target) {
//   let map = {}; 
//     for (var i = 0; i < nums.length; i++) {
//         let difference = target - nums[i]; 
//         if (map[difference] !== undefined) {
//             return [map[difference], i]
//         } else {
//             map[nums[i]] = i; 
//         }
//     }
// };





/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let container = []; 
  let leftProducts = []; 
  let rightProducts = []; 
    
  for (var i = 0; i < nums.length; i++) {
      if (i === 0) {
          leftProducts.push(1)
      } else {
          leftProducts.push(nums[i-1] * leftProducts[i-1])
      }
  }
  for (var j = nums.length - 1; j > -1; j--) {
      if (j === (nums.length -1)) {
        rightProducts[j] = 1; 
      } else {
          console.log(nums[j+1], rightProducts, j, rightProducts[j+1]);
          rightProducts[j] = (nums[j+1] * rightProducts[j+1]); 
      }
  }

  for (var k = 0; k < nums.length; k++) {
      container.push(leftProducts[k] * rightProducts[k])
  }
    return container; 
};

console.log(productExceptSelf([1,2,3,4])); 
// [1, 2, 3, 4]
// num = 1, product = 2 * 3 * 4 
// num = 2, product = 1 * 3 * 4
// num = 3, product = 1 * 2 * 4
// num = 4, product = 1 * 2 * 3 

// i = 3 => [ , , , 1]
// i = 2 => 4 * 1 => [ , ,4, 1]
// i = 1 => 3 * 4 => [ ,12, 4, 1]
// i = 0 => 2 * 12 => [24, 12, 4, 1]


// let l = [1, 2], r = [1]; 
// i = 0, 
// i = 1, 1 * 1 = 2

// j = 3, 
// j = 2, 

// [4, 5, 1, 8, 2]
// num = 4, product = 5 * 1 * 8 * 2
// num = 5, product = 4 * 1 * 8 * 2


// i = 0 => [1]
// i = 1 => 1 * 4 => [1, 4]
// i = 2 => 4 * 5 => [1, 4, 20]
// i = 3 => 20 * 1 => [1, 4, 20, 20]
// i = 4 => 20 * 8 => [1, 4, 20, 20, 160]

// j = 4 => [ , , , ,1]
// j = 3 => 2 * 1 => [ , , ,2, 1]
// j = 2 => 8 * 2 => [ , , 16, 2, 1]
// j = 1 => 1 * 16 => [ , 16, 16, 2, 1]
// j = 0 => 5 * 16 => [80, 16, 16, 2, 1]

// 1. initialize array named left 
// 2. initialize array named right
// 3. iterate through input array starting from left 
// 4. populate the left array using l[i] === l[i - 1] * nums[j - 1]
// 5. populate the right array using r[i] === r[i + 1] * nums[i + 1]

// 

// Remember that swapping requires storing a version of the original piece

// Tank that holds the largest amount of water

var maxArea = function(height) {
    let left = 0, right = height.length - 1, maxArea = 0;
    
    while (left < right) {
        maxArea = Math.max(maxArea, area(left, right, height[left], height[right])); 
        if (height[left] < height[right]) {
            left ++
        } else if (height[right] < height[left]){
            right --
        } else {
            left ++
        }
    }
    
    return maxArea; 
};

var area = function(left, right, height1, height2) {
    let height = Math.min(height1, height2); 
    let width = right - left; 
    return width * height; 
}

// Re-do 3sum

var threeSum = function(nums) {
    nums.sort((a,b) => a-b); 
    let triplets = []; 
    for (var i = 0; i < nums.length; i++) {  
        if (nums[i] === nums[i-1]) {
            continue; 
        } 
        let target = -(nums[i]);
        searchForPair(target, i, nums, triplets); 
    }
    return triplets; 
};

let searchForPair = function(target, start, array, triplets) {
    let right = array.length - 1; 
    let left = start + 1; 
    while (left < right) {
        if (array[left] + array[right] === target) {
            triplets.push([-target, array[left], array[right]]); 
            left ++; 
            right --; 
              while (left < right && array[left] === array[left-1]) {
                left ++; 
              }
              while (left < right && array[right] === array[right+1]) {
                right --; 
              }
        } else if (array[left] + array[right] < target) {
            left ++; 
        } else {
            right --; 
        }
    }
}
