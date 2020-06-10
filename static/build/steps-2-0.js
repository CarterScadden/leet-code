// Given a non-negative integer num, return the number of steps
//to reduce it to zero. If the current number is even, you have
// to divide it by 2, otherwise, you have to subtract 1 from it.
export function steps20(num) {
    let steps = 0;
    while (num > 0) {
        num = (num % 2 === 0) ? num / 2 : --num;
        steps++;
    }
    return steps;
}
