// Given the array nums consisting of 2n elements
// in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation:
// Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7
// then the answer is [2,3,5,4,1,7].
export function ShuffleTheArray(n, nums) {
    // [ [], [], [] ]
    let arr = [];
    // fill the array with n[]
    for (let i = 0; i < n; i++)
        arr[i] = [];
    for (const i in nums) {
        // get each number
        const num = nums[i];
        // figure out where in arr this number should go
        const index = +i % n;
        // push this number into the array
        arr[index].push(num);
    }
    return arr.flat();
}
/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
*/
/*
var shuffle = function(nums, n) {
  // [ [], [], [] ]
  const arr = splitArrayInto2D(n, nums);

  for (const i in nums) {
    const num = nums[i];
    const index = +i % n;
    arr[index].push(num);
  }

  return arr.flat();
}

function splitArrayInto2D(n, nums) {
  let arr = [];
  for (let i = 0; i < n; i++) arr[i] = [];
  return arr;
}
*/
