let nums = [1, 2, 11, 4, 21];
let sorted = nums.sort();

console.log(sorted); // o/p: [ 1, 11, 2, 21, 4 ]  Since here sorting is done based on strings

sorted = nums.sort((a, b) => a - b);

console.log(sorted); // o/p: [ 1, 2, 4, 11, 21 ]  Since here soeting is done based on numbers
