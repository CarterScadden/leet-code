// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
//
// Given a balanced string s split it in the maximum amount of balanced strings.
//
// Return the maximum amount of splitted balanced strings.
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
export default function (str) {
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
}
