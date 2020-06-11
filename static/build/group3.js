export default {
    // You are given the array paths, where
    // paths[i] = [cityAi, cityBi] means there
    // exists a direct path going from cityAi to cityBi.
    // Return the destination city, that is, the city
    // without any path outgoing to another city.
    //
    // It is guaranteed that the graph of paths forms a
    // line without any loop, therefore, there will be exactly one destination city.
    /*
      Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
      Output: "Sao Paulo"
      Explanation: Starting at "London" city you will reach
        "Sao Paulo" city which is the destination city.
        Your trip consist of:
        "London" -> "New York" -> "Lima" -> "Sao Paulo".
    */
    destCity(paths) {
        // A Map keeps the order that it is inserted,
        // So like an object mixed with an array;
        // @ts-ignore
        const path = new Map(paths);
        // the possibilites have to be the second part of the pair as
        // the first represents the starting points and the second the
        // ending points
        for (const [, city] of path)
            if (!path.has(city))
                return city;
    },
    /*
      Given a positive integer num consisting only of digits 6 and 9.
  
      Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
      Input: num = 9669
      Output: 9969
      Explanation:
      Changing the first digit results in 6669.
      Changing the second digit results in 9969.
      Changing the third digit results in 9699.
      Changing the fourth digit results in 9666.
      The maximum number is 9969.
    */
    maxNumberBySwitching6Or9(num) {
        const numAsString = num.toString();
        let newNum = '';
        for (const i in numAsString.split('')) {
            const char = numAsString[i];
            if (char === '6') {
                const restOfNumber = numAsString.slice(+i + 1);
                newNum += `9${restOfNumber}`;
                break;
            }
            newNum += char;
        }
        return +newNum;
    },
    /*
      A valid parentheses string is either empty (""),
        "(" + A + ")", or A + B, where A and B are
        valid parentheses strings, and + represents
        string concatenation.
  
        For example, "", "()", "(())()", and "(()(()))" are
        all valid parentheses strings.
  
      A valid parentheses string S is primitive if it is nonempty, and there
      does not exist a way to split it into S = A+B, with A and B nonempty
      valid parentheses strings.
  
      Given a valid parentheses string S, consider its primitive
        decomposition: S = P_1 + P_2 + ... + P_k, where P_i are
        primitive valid parentheses strings.
  
      Return S after removing the outermost parentheses of every primitive
      string in the primitive decomposition of S.
  
  
      Input: "(()())(())"
      Output: "()()()"
      Explanation:
      The input string is "(()())(())",
        with primitive decomposition "(()())" + "(())".
      After removing outer parentheses of each part,
        this is "()()" + "()" = "()()()".
    */
    removeOuterMostParenth(str) {
        let parenthCount = 0;
        let result = "";
        for (const char of str) {
            if (char === "(") {
                if (parenthCount) {
                    result += char;
                }
                parenthCount++;
            }
            else {
                parenthCount--;
                if (parenthCount) {
                    result += char;
                }
            }
        }
        return result;
    },
    /*
    Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
  
    Return the number of negative numbers in grid.
  
    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Explanation: There are 8 negatives number in the matrix.
    */
    numberOfNegNumbers(grid) {
        // return grid.flat().reduce((num, total) => num < 0 ? total + num : total, 0);
        let total = 0;
        for (const num of grid.flat())
            num < 0 ? total++ : null;
        return total;
    },
    /*
  
      Given a string s formed by digits ('0' - '9') and '#' .
      We want to map s to English lowercase characters as follows:
  
      Characters ('a' to 'i') are represented by ('1' to '9') respectively.
      Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
      Return the string formed after mapping.
  
      It's guaranteed that a unique mapping will always exist
  
      Input: s = "10#11#12"
      Output: "jkab"
      Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
  
    */
    frequentAlphabet(coded) {
        const legend = {
            '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e',
            '6': 'f', '7': 'g', '8': 'h', '9': 'i',
            '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm',
            '14#': 'n', '15#': 'o', '16#': 'p', '17#': 'q',
            '18#': 'r', '19#': 's', '20#': 't', '21#': 'u',
            '22#': 'v', '23#': 'w', '24#': 'x', '25#': 'y',
            '26#': 'z',
        };
        let stringToReturn = '';
        for (let i = 0; i < coded.length; i++) {
            if (coded[+i + 2] === '#') {
                const key = `${coded[i]}${coded[i + 1]}#`;
                stringToReturn += legend[key];
                i += 2;
            }
            else {
                stringToReturn += legend[coded[i]];
            }
        }
        return stringToReturn;
    },
    /*
      International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
  
      For convenience, the full table for the 26 letters of the English alphabet is given below:
  
      [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
      Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
  
      Return the number of different transformations among all words we have.
  
      Example:
      Input: words = ["gin", "zen", "gig", "msg"]
      Output: 2
      Explanation:
      The transformation of each word is:
      "gin" -> "--...-."
      "zen" -> "--...-."
      "gig" -> "--...--."
      "msg" -> "--...--."
  
      There are 2 different transformations, "--...-." and "--...--.".
  
      Note:
  
      The length of words will be at most 100.
      Each words[i] will have length in range [1, 12].
      words[i] will only consist of lowercase letters.
    */
    amountOfUniqueMorseCode(words) {
        const legend = {
            'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
            'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
            'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
            'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
            'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
            'u': '..-', 'v': '...-', 'w': '.--',
            'x': '-..-', 'y': '-.--', 'z': '--..'
        };
        const encodedList = [];
        for (const word of words) {
            let encoded = '';
            for (const char of word.split('')) {
                encoded += legend[char];
            }
            encodedList.push(encoded);
        }
        const set = new Set(encodedList);
        return set.size;
    },
    /*
      Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
  
      Example 1:
  
      Input: "Hello"
      Output: "hello"
    */
    lowerCase(word) {
        /*
          technically cheating but if i need to do this its probably in a
          lower level language so in that case +32 to the char or
          change to byte and add 32 if they are less than some number i
          forgot rightnow.
        */
        let str = '';
        for (const char of word) {
            str += char.toLowerCase();
        }
        return str;
    },
    /*
      Given two integer arrays of equal length target and arr.
  
      In one step, you can select any non-empty sub-array of arr and reverse it.
      You are allowed to make any number of steps.
  
      Return True if you can make arr equal to target, or False otherwise.
  
      Input: target = [1,2,3,4], arr = [2,4,1,3]
      Output: true
      Explanation: You can follow the next steps to convert arr to target:
      1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
      2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
      3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
      There are multiple ways to convert arr to target, this is not the only way to do so.
    */
    makeArraysEqual(nums1, nums2) {
        for (let i in nums1) {
            while (nums1[i] !== nums2[i]) {
                const before = nums2.slice(0, +i);
                const after = nums2.slice(+i);
                const index = after.indexOf(nums1[i]);
                if (index === -1)
                    return false;
                // holds the sub arrary we will reverse,
                // also contains the num1[i] at sub[sub.length-1] (end of sub array)
                const sub = after.slice(0, index + 1);
                const afterSub = after.slice(index + 1);
                nums2 = before.concat(sub.reverse().concat(afterSub));
            }
        }
        for (const i in nums1) {
            if (nums1[i] !== nums2[i])
                return false;
        }
        return true;
    },
    /*
  
      Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
  
      Return the number of cells with odd values in the matrix after applying the increment to all indices.
  
      Input:
        n = 2, (rows)
        m = 3, (columns)
        indices = [
          [0,1],
          [1,1]
        ]
      Output: 6
      Explanation: Initial matrix = [[0,0,0],[0,0,0]].
      After applying first increment it becomes [[1,2,1],[0,1,0]].
      The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
    */
    amountOfOddCells(numOfRows, numOfColumns, indices) {
        // rows = 2
        // numOfColumns = 3
        // matrix = [ [0 , 0 , 0], [0, 0, 0], ]
        const rows = {};
        const columns = {};
        for (const [r, c] of indices) {
            rows[r] = numOfColumns - (rows[r] || 0);
            columns[c] = numOfRows - (columns[c] || 0);
        }
        let count = 0;
        let rowCount = 0;
        // count
        for (const c in rows) {
            count += rows[c];
            // not === 0 ?
            rowCount += rows[c] ? 1 : 0;
        }
        for (const c in columns) {
            const num = columns[c];
            if (num) { // if num !== 0
                count += numOfRows - (2 * rowCount);
            }
        }
        return count;
    },
    /*
      Given an array arr,
      replace every element in that array with the greatest
      element among the elements to its right,
      and replace the last element with -1.
  
      After doing so, return the array.
    */
    /*
      Input: arr = [17,18,5,4,6,1]
      Output: [18,6,6,6,1,-1]
    */
    replaceNums(numbers) {
        const result = new Array(numbers.length);
        result[numbers.length - 1] = -1;
        // for loop in reverse
        for (let i = numbers.length - 1; i > 0; i -= 1) {
            result[i - 1] = Math.max(numbers[i], result[i]);
        }
        return result;
    }
};
