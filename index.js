// 1. substring must contain same letter frequency as pattern
// 2. Keep track of substring's min length 
// 3. Track matched letters
// 3. Keep hashmap of pattern's frequency
// 4. Decrement hashmap at rightChar if in pattern
// 5. If matched letters === keys in hashmap then we found pattern


// 6. shrink window while pattern is present
// 7. Track window start and window end

const find_substring = function(str, pattern) {
  // Write your code here
  let minLength = Infinity; 
  let substring = ''; 
  let matched = 0; 
  let windowStart = 0; 

  let map = {};
  for (var i = 0; i < pattern.length; i++) {
    let char = pattern[i]; 
    if (map[char] === undefined) {
      map[char] = 1; 
    } else {
      map[char] ++; 
    }
  }

  for (var windowEnd = 0; windowEnd < str.length; windowEnd ++) {
    let rightChar = str[windowEnd];
    if (rightChar in map) {
      map[rightChar] -- ; 
    } 
    if (map[rightChar] === 0) {
      matched ++; 
    }
    
    while (matched === Object.keys(map).length) {
      if (windowEnd - windowStart + 1 < minLength) {
        substring = str.substring(windowStart, windowEnd + 1);
        minLength = windowEnd - windowStart + 1; 
      }
      let leftChar = str[windowStart]; 
      windowStart ++; 
      if (leftChar in map) {
        if (map[leftChar] === 0) {
          matched --;  
        }
        map[leftChar] ++; 
      }
    }
  }

  return substring; 

  // return "";
}

// 'abbca'
// abbc
// 

console.log(find_substring("aabdec", "abc")); 
// Input: String="aabdec", Pattern="abc"
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

const n1 = {
  data: 100; 
}; 

const n2 = {
  data: 200
}

n1.next = n2; 


