import { ShuffleTheArray } from './shuffleTheArray.js';
import { kidsWithCandies } from './kidsWithGreatestNumberOfCandies.js';
import { defang } from './defangIP.js';
import { steps20 } from './steps-2-0.js';
import { jewelsAndStones } from './jewelsAndStones.js';
import { numberSmallerThanGiven } from './numberSmallerThanGiven.js';
import { decompressRunLengthEncodedList } from './decompressRunLengthEncodedList.js';
import { subtractTheProductAndSumOfDigitsOfInterger } from './SubtractTheProductAndSumOfDigitsOfInterger.js'
import { amountOfStringLengthOfNumbers } from './amountOfStringLengthOfNumbers.js';
import createTargetInArray from './createTargetInArray.js';
import splitStringsInArray from './splitStringsInArray.js';
import group2 from './group2.js';

const shuffleTheArrayTest = () =>
  arrayIsSame( [2,3,5,4,1,7], ShuffleTheArray(3, [2,5,1,3,4,7]) );
const kidsWithCandiesTest = () =>
  kidsWithCandies( [2,3,5,1,3], 3).some((bool) => bool)
const defangTest = () => "1[.]1[.]1[.]1" === defang('1.1.1.1');
const steps20Test = () => 4 === steps20(8);
const jewelsAndStonesTest = () => 3 === jewelsAndStones("aA", "aAAbbbb");
const numberSmallerThanGivenTest = () =>
  arrayIsSame( [4,0,1,1,3], numberSmallerThanGiven([8,1,2,2,3]) );
const decompressRunLengthEncodedListTest = () =>
  arrayIsSame( [2,4,4,4], decompressRunLengthEncodedList([1,2,3,4]));
const subtractTheProductAndSumOfDigitsOfIntergerTest = () =>
  15 === subtractTheProductAndSumOfDigitsOfInterger(234)
const amountOfStringLengthOfNumbersTest = () =>
  1 === amountOfStringLengthOfNumbers([555,901,482,1771]);
const createTargetInArrayTest = () =>
  arrayIsSame(
    [0,4,1,3,2],
    createTargetInArray([0,1,2,3,4], [0,1,2,2,1])
  );
const splitStringsInArrayTest = () => 4 === splitStringsInArray('RLRRLLRLRL');
const rangeSumOfBstTest = () =>
  32 === group2.rangeSumOfBst(
    {
      val: 10,
      left: { val: 5, left: { val: 3, left: null, right: null }, right: { val: 7, left: null, right: null }},
      right: { val: 15, left: null, right: { val: 18, left: null, right: null }}
    },
    7,
    15
);
const maximumProductOfTwoElementsInArrayTest = () =>
  12 === group2.maximumProductOfTwoElementsInArray([3,4,5,2])
const binaryToIntTest = () => 5 === group2.binaryToInt([1,0,1]);
const studentsDoingHomeworkAtAGivenTimeTest = () =>
  1 === group2.studentsDoingHomeworkAtAGivenTime( [1,2,3], [3,2,7], 4 );
const minimumTimeVisitingAllPointsTest = () =>
  7 === group2.minimumTimeVisitingAllPoints([[1,1],[3,4],[-1,0]]);
  
const tests: Function[] = [
  shuffleTheArrayTest,
  kidsWithCandiesTest,
  defangTest,
  steps20Test,
  jewelsAndStonesTest,
  numberSmallerThanGivenTest,
  decompressRunLengthEncodedListTest,
  subtractTheProductAndSumOfDigitsOfIntergerTest,
  amountOfStringLengthOfNumbersTest,
  createTargetInArrayTest,
  splitStringsInArrayTest,
  rangeSumOfBstTest,
  maximumProductOfTwoElementsInArrayTest,
  binaryToIntTest,
  studentsDoingHomeworkAtAGivenTimeTest,
  minimumTimeVisitingAllPointsTest,
];

function runTests() {
  for (let i in tests) {
    const func = tests[i];
    const paragraph = appendParagraph(func.name, i);

    if (!func()) updateParagraph(paragraph, 'x', 'red');
    else updateParagraph(paragraph, '✓', 'green');
  }
}

function appendParagraph(text: string, ID: string) {
  const p = document.createElement('p');
  p.id = ID;
  p.innerText = `o Testing: ${text}`;
  document.body.appendChild(p);
  return p;
}

function updateParagraph(paragraph: HTMLParagraphElement, marker: string, color: string) {
  paragraph.innerText = `${marker}${paragraph.innerText.slice(1)}`;
  paragraph.style.color = color;
}

runTests();

function arrayIsSame(arr1: any[], arr2: any[])  {
  if (arr1.length !== arr2.length) return false;

  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true
}



/*
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', function (event) {
    console.log('reloading...');
    resetBody();
    runTests();
});

function resetBody() {
  const s = document.createElement('script');
  s.setAttribute('type', 'module');
  s.setAttribute('src', './build/index.js');
  document.body.innerHTML = '';
  document.body.appendChild(s);
}
*/
