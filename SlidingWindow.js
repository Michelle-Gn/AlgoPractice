// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// var maxSum = function (input, k) {
//   var start = 0; 
//   var maxSum = 0; 
//   var windowSum = 0; 
//   var windowLength = 0; 

//   for (var end = 0; end < input.length; end ++) {
//     windowSum += input[end]; 
//     windowLength = (end - start + 1); 
//     if (windowLength === k) {
//       maxSum = Math.max(maxSum, windowSum); 
//       windowSum -= input[start]; 
//       start += 1; 
//     }
//   }

//   return maxSum; 
// }

// // [2, 1, 5, 1, 3, 2], k = 3, start = 3, end = 5, maxSum = 9
// // windowSum = 6, windowLength = 3

// // output 9 

// console.log(maxSum([2, 1, 5, 1, 3, 2], 3))


var duplicateCheck = function (string, k) {
  var map = {}; 
  var start = 0; 
  var subLength = 0; 
  var substring = ''; 
  // input is a string and k, certain length 
    for (var end = 0; end < string.length; end ++) {
      substring = substring + string[end];
      subLength = end - start + 1; 
      // check if duplicate exists when subLength reaches k
      if (subLength === k) {
        if (map[substring] !== undefined) {
          return substring; 
        } else {
          map[substring] = 0; 
        }
        substring = substring.slice(1); 
        start += 1; 
      }
    }
  
  return false; 
}

console.log(duplicateCheck('abcdeff', 1)); 



var longestRepeatingSubstring = function(s) {
  var low = 1; 
  var high = s.length; 
  var mid = 0; 
  var max = 0; 
    
    while (low <= high) {
      mid = Math.floor((low + high) / 2); 
      console.log('duplicate mid', mid); 
      var result = duplicateCheck(s, mid); 
      if (typeof result === 'string') {
          max = Math.max(max, mid); 
          low = mid + 1; 
      } else {
          high = mid - 1; 
      }
    }
    
  return duplicateCheck (s, max); 
 
};


var duplicateCheck = function (string, k) {
  var map = {}; 
  var start = 0; 
  var subLength = 0; 
  var substring = ''; 
  // input is a string and k, certain length 
    for (var end = 0; end < string.length; end ++) {
      substring = substring + string[end];
      subLength = end - start + 1; 
      // check if duplicate exists when subLength reaches k
      if (subLength === k) {
        if (map[substring] !== undefined) {
          return substring; 
        } else {
          map[substring] = 0; 
        }
        substring = substring.slice(1); 
        start += 1; 
      }
    }
  
  return false; 
}


var words = ["a","banana","app","appl","ap","apply","apple"]; 
words.sort(); 
console.log(words); 

var res = ''; 
console.log('length', res.length); 

const longestWord = (words) => {
    words.sort()
    const wordSet = new Set(words)
    let res = ''
    for (const w of words) {
        let isValid = true
        let key = ''
        for (let i = 0; i < w.length - 1; i++) {
            key += w[i]
            if (!wordSet.has(key)) {
                isValid = false
                break;
            }
        }
        if (isValid && w.length > res.length) {
            res = w
        }
    }
    return res
};

// res = 'apple'
// a, isValid = true, key = a, 
// 'ap', isValid = true, key = 'a'
// 'app', isValid = true, key = 'ap'
// 'appl', isValid = true, key = 'app'
// 'apple', isValid = true, key = 'appl'
// 'apply', isValid = true, key = 'appl'
// 

