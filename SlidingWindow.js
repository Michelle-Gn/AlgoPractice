// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

var maxSum = function (input, k) {
  var start = 0; 
  var maxSum = 0; 
  var windowSum = 0; 
  var windowLength = 0; 

  for (var end = 0; end < input.length; end ++) {
    windowSum += input[end]; 
    windowLength = (end - start + 1); 
    if (windowLength === k) {
      maxSum = Math.max(maxSum, windowSum); 
      windowSum -= input[start]; 
      start += 1; 
    }
  }

  return maxSum; 
}

// [2, 1, 5, 1, 3, 2], k = 3, start = 3, end = 5, maxSum = 9
// windowSum = 6, windowLength = 3

// output 9 

console.log(maxSum([2, 1, 5, 1, 3, 2], 3))


var duplicateCheck = function (string, k) {
  var map = {}; 
  var start = 0; 
  var subLength = 0; 
  var substring = ''; 
  // input is a string and k, certain length 
    for (var end = 0; end < string.length; end ++) {
      substring = substring + string[end]; 
      subLength = end - start + 1; 
      // check if duplicate exists subLength reaches k
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



