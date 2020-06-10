// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
export function subtractTheProductAndSumOfDigitsOfInterger(num) {
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
}
