import group2 from './group2.js';
import group1 from './group1.js';
import group3 from './group3.js';
const shuffleTheArrayTest = () => arrayIsSame([2, 3, 5, 4, 1, 7], group1.ShuffleTheArray(3, [2, 5, 1, 3, 4, 7]));
const kidsWithCandiesTest = () => group1.kidsWithCandies([2, 3, 5, 1, 3], 3).some((bool) => bool);
const defangTest = () => '1[.]1[.]1[.]1' === group1.defang('1.1.1.1');
const steps20Test = () => 4 === group1.steps20(8);
const jewelsAndStonesTest = () => 3 === group1.jewelsAndStones('aA', 'aAAbbbb');
const numberSmallerThanGivenTest = () => arrayIsSame([4, 0, 1, 1, 3], group1.numberSmallerThanGiven([8, 1, 2, 2, 3]));
const decompressRunLengthEncodedListTest = () => arrayIsSame([2, 4, 4, 4], group1.decompressRunLengthEncodedList([1, 2, 3, 4]));
const subtractTheProductAndSumOfDigitsOfIntergerTest = () => 15 === group1.subtractTheProductAndSumOfDigitsOfInterger(234);
const amountOfStringLengthOfNumbersTest = () => 1 === group1.amountOfStringLengthOfNumbers([555, 901, 482, 1771]);
const createTargetInArrayTest = () => arrayIsSame([0, 4, 1, 3, 2], group1.createTargetInArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
const splitStringsInArrayTest = () => 4 === group1.splitStringsInArray('RLRRLLRLRL');
const rangeSumOfBstTest = () => 32 === group2.rangeSumOfBst({
    val: 10,
    left: { val: 5, left: { val: 3, left: null, right: null }, right: { val: 7, left: null, right: null } },
    right: { val: 15, left: null, right: { val: 18, left: null, right: null } }
}, 7, 15);
const maximumProductOfTwoElementsInArrayTest = () => 12 === group2.maximumProductOfTwoElementsInArray([3, 4, 5, 2]);
const binaryToIntTest = () => 5 === group2.binaryToInt([1, 0, 1]);
const studentsDoingHomeworkAtAGivenTimeTest = () => 1 === group2.studentsDoingHomeworkAtAGivenTime([1, 2, 3], [3, 2, 7], 4);
const minimumTimeVisitingAllPointsTest = () => 7 === group2.minimumTimeVisitingAllPoints([[1, 1], [3, 4], [-1, 0]]);
const amountOfOddCellsTest = () => 6 === group3.amountOfOddCells(2, 3, [[0, 1], [1, 1]]);
const amountOfUniqueMorseCodeTest = () => 2 === group3.amountOfUniqueMorseCode(['gin', 'zen', 'gig', 'msg']);
const destCityTest = () => 'Sao Paulo' === group3.destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]);
const frequentAlphabetTest = () => 'jkab' === group3.frequentAlphabet('10#11#12');
const makeArraysEqualTest = () => (group3.makeArraysEqual([1, 2, 3, 4], [2, 4, 1, 3])
    &&
        group3.makeArraysEqual([1, 2, 3, 4], [2, 4, 1, 5]) === false);
const lowerCaseTest = () => 'hello' === group3.lowerCase('HeLlo');
const maxNumberBySwitching6Or9Test = () => 9969 === group3.maxNumberBySwitching6Or9(9669);
const numberOfNegNumbersTestTest = () => 3 === group3.numberOfNegNumbers([[1, -1], [4, -4, -7]]);
const removeOuterMostParenthTest = () => '()()()' === group3.removeOuterMostParenth('(()())(())');
const replaceNumsTest = () => arrayIsSame([18, 6, 6, 6, 1, -1], group3.replaceNums([17, 18, 5, 4, 6, 1]));
const tests = [
    shuffleTheArrayTest, kidsWithCandiesTest,
    defangTest, steps20Test, jewelsAndStonesTest,
    numberSmallerThanGivenTest,
    decompressRunLengthEncodedListTest,
    subtractTheProductAndSumOfDigitsOfIntergerTest,
    amountOfStringLengthOfNumbersTest,
    createTargetInArrayTest, splitStringsInArrayTest,
    rangeSumOfBstTest, maximumProductOfTwoElementsInArrayTest,
    binaryToIntTest, studentsDoingHomeworkAtAGivenTimeTest,
    minimumTimeVisitingAllPointsTest,
    amountOfOddCellsTest, amountOfUniqueMorseCodeTest, destCityTest,
    frequentAlphabetTest, makeArraysEqualTest, lowerCaseTest,
    maxNumberBySwitching6Or9Test, numberOfNegNumbersTestTest,
    removeOuterMostParenthTest, replaceNumsTest
];
function runTests() {
    for (let i in tests) {
        const func = tests[i];
        const paragraph = appendParagraph(func.name, i);
        if (!func())
            updateParagraph(paragraph, 'x', 'red');
        else
            updateParagraph(paragraph, '✓', 'green');
    }
}
function appendParagraph(text, ID) {
    const p = document.createElement('p');
    p.id = ID;
    p.innerText = `o Testing: ${text}`;
    document.body.appendChild(p);
    return p;
}
function updateParagraph(paragraph, marker, color) {
    paragraph.innerText = `${marker}${paragraph.innerText.slice(1)}`;
    paragraph.style.color = color;
}
runTests();
function arrayIsSame(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i in arr1) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
