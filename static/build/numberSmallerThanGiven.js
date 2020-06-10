export function numberSmallerThanGiven(numbers) {
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
}
