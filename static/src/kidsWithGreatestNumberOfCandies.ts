// Given the array candies and the integer extraCandies,
//where candies[i] represents the number of candies that the ith kid has.
//
// For each kid check if there is a way to distribute extraCandies among
// the kids such that he or she can have the greatest number of candies
// among them. Notice that multiple kids can have the greatest number of candies.

// example
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

export function kidsWithCandies(candies: number[], extraCandies: number) {
  const greatestNumber = candies.reduce((num, max) => max > num ? max : num, 0);
  return reduce(
    (num, arr) => arr.concat( (num + extraCandies) >= greatestNumber)
    )(candies);
}

// due to the linter I rewrote the reduce function with a for loop
function reduce(func: (n:number, acc: boolean[]) => boolean[]) {
  return function(baseArray: number[]) {
    let arr: boolean[] = [];
    for (const num of baseArray) {
      arr = func(num, arr);
    }
    return arr;
  }
}
