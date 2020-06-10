export default {
    // Given a valid (IPv4) IP address, return a defanged version of that IP address.
    //
    // A defanged IP address replaces every period "." with "[.]".
    // Input: address = "1.1.1.1"
    // Output: "1[.]1[.]1[.]1"
    defang(ipAddress) {
        return ipAddress.replace(/\./g, '[.]');
    },
    // We are given a list nums of integers representing a list compressed with run-length encoding.
    // Consider each adjacent pair of elements
    // [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
    // For each such pair, there are freq elements with value val
    // concatenated in a sublist. Concatenate all the sublists from
    // left to right to generate the decompressed list.
    // Return the decompressed list.
    /*
  
    Input: nums = [1,2,3,4]
    Output: [2,4,4,4]
    Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
    The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
    At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
  
    */
    decompressRunLengthEncodedList(numbers) {
        let arr = [];
        for (let i = 0; i < numbers.length; i += 2) {
            const frequency = numbers[i];
            const val = numbers[+i + 1];
            for (let j = 0; j < frequency; j++) {
                arr.push(val);
            }
            //
            // console.log([frequency, val]);
        }
        return arr;
    },
    // Given two arrays of integers nums and index. Your task is to create target array under the following rules:
    //
    // Initially target array is empty.
    // From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    // Repeat the previous step until there are no elements to read in nums and index.
    // Return the target array.
    //
    // It is guaranteed that the insertion operations will be valid.
    // Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    // Output: [0,4,1,3,2]
    // Explanation:
    // nums       index     target
    // 0            0        [0]
    // 1            1        [0,1]
    // 2            2        [0,1,2]
    // 3            2        [0,1,3,2]
    // 4            1        [0,4,1,3,2]
    createTargetInArray(nums, indexs) {
        let arr = [];
        for (const i in nums) {
            const before = arr.slice(0, indexs[i]);
            before[indexs[i]] = nums[i];
            arr = before.concat(...arr.slice(indexs[i]));
        }
        return arr;
    },
    /*
    Input: nums = [12,345,2,6,7896]
    Output: 2
    Explanation:
    12 contains 2 digits (even number of digits).
    345 contains 3 digits (odd number of digits).
    2 contains 1 digit (odd number of digits).
    6 contains 1 digit (odd number of digits).
    7896 contains 4 digits (even number of digits).
    Therefore only 12 and 7896 contain an even number of digits
    */
    amountOfStringLengthOfNumbers(numbers) {
        let total = 0;
        for (const num of numbers)
            num.toString().length % 2 === 0
                ? total++
                : null;
        return total;
    },
    // You're given strings J representing the types of stones that are jewels,
    //and S representing the stones you have.
    //Each character in S is a type of stone you have.
    //You want to know how many of the stones you have are also jewels.
    //
    // The letters in J are guaranteed distinct, and all characters
    // in J and S are letters. Letters are case sensitive, so "a" is
    //considered a different type of stone from "A".
    jewelsAndStones(jewels, rocks) {
        let total = 0;
        let rocksThatAreJewelsArray = [];
        for (const rock of rocks.split('')) {
            if (jewels.includes(rock))
                rocksThatAreJewelsArray.push(rock);
        }
        for (const rock of rocksThatAreJewelsArray)
            if (jewels.includes(rock))
                total++;
        return total;
    },
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
    kidsWithCandies(candies, extraCandies) {
        const greatestNumber = candies.reduce((num, max) => max > num ? max : num, 0);
        return reduce((num, arr) => arr.concat((num + extraCandies) >= greatestNumber))(candies);
        // due to the linter I rewrote the reduce function with a for loop
        function reduce(func) {
            return function (baseArray) {
                let arr = [];
                for (const num of baseArray) {
                    arr = func(num, arr);
                }
                return arr;
            };
        }
    },
    numberSmallerThanGiven(numbers) {
        const arr = [];
        for (const num of numbers) {
            let total = 0;
            for (const num2 of numbers) {
                if (num > num2)
                    total++;
            }
            arr.push(total);
        }
        return arr;
    },
    // Given the array nums consisting of 2n elements
    // in the form [x1,x2,...,xn,y1,y2,...,yn].
    // Return the array in the form [x1,y1,x2,y2,...,xn,yn].
    // Input: nums = [2,5,1,3,4,7], n = 3
    // Output: [2,3,5,4,1,7]
    // Explanation:
    // Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7
    // then the answer is [2,3,5,4,1,7].
    ShuffleTheArray(n, nums) {
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
    },
    // Balanced strings are those who have equal quantity of 'L' and 'R' characters.
    //
    // Given a balanced string s split it in the maximum amount of balanced strings.
    //
    // Return the maximum amount of splitted balanced strings.
    // Input: s = "RLRRLLRLRL"
    // Output: 4
    // Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
    splitStringsInArray(str) {
        let countStr = 0;
        let r = 0;
        let l = 0;
        for (let char of str.split('')) {
            if (char === 'R')
                r++;
            if (char === 'L')
                l++;
            if (r === l) {
                r = l = 0;
                countStr += 1;
            }
        }
        return countStr;
    },
    // Given a non-negative integer num, return the number of steps
    //to reduce it to zero. If the current number is even, you have
    // to divide it by 2, otherwise, you have to subtract 1 from it.
    steps20(num) {
        let steps = 0;
        while (num > 0) {
            num = (num % 2 === 0) ? num / 2 : --num;
            steps++;
        }
        return steps;
    },
    // Input: n = 234
    // Output: 15
    // Explanation:
    // Product of digits = 2 * 3 * 4 = 24
    // Sum of digits = 2 + 3 + 4 = 9
    // Result = 24 - 9 = 15
    subtractTheProductAndSumOfDigitsOfInterger(num) {
        const strings = num.toString().split('');
        const numbers = [];
        for (const i in strings)
            numbers[i] = +strings[i];
        let mult = 1;
        for (const num of numbers)
            mult *= num;
        let add = 0;
        for (const num of numbers)
            add += num;
        return mult - add;
    },
};
