export default {
    // Given the root node of a binary search tree,
    // return the sum of values of all nodes with
    // value between L and R (inclusive).
    //
    // The binary search tree is guaranteed to have unique values.
    // Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    // Output: 32
    // root:
    /*
    TreeNode {
      val: 10,
      left: TreeNode {
        val: 5,
        left: TreeNode { val: 3, left: null, right: null },
        right: TreeNode { val: 7, left: null, right: null }
      },
      right: TreeNode {
        val: 15,
        left: null,
        right: TreeNode { val: 18, left: null, right: null }
      }
    }
    */
    rangeSumOfBst(root, L, R) {
        return totalUp(root, 0);
        function totalUp(root, total) {
            if (root) {
                if (L <= root.val && root.val <= R)
                    total += root.val;
                const totalLeft = totalUp(root.left, 0);
                const totalRight = totalUp(root.right, 0);
                return total + totalLeft + totalRight;
            }
            return total;
        }
    },
    //Given the array of integers nums, you will choose two different
    // indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
    /*
      Input: nums = [3,4,5,2]
      Output: 12
      Explanation: If you choose the indices i=1 and j=2 (indexed from 0),
      you will get the maximum value,
      that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
    */
    maximumProductOfTwoElementsInArray(nums) {
        const [largest, secondLargest] = nums.sort((a, b) => a > b ? -1 : a === b ? 0 : 1);
        return ((largest - 1) *
            (secondLargest - 1));
    },
    /*
      Given head which is a reference node to a singly-linked list.
      The value of each node in the linked list is either 0 or 1.
      The linked list holds the binary representation of a number.
  
      Return the decimal value of the number in the linked list.
    */
    /*
      Input: head = [1,0,1]
      Output: 5
      Explanation: (101) in base 2 = (5) in base 10
    */
    binaryToInt(numbers) {
        return parseInt((numbers
            .join('')
            .toString()).replace(/[^01]/gi, ''), 2);
    },
    /*
      Given two integer arrays startTime and
      endTime and given an integer queryTime.
  
      The ith student started doing their homework at the
      time startTime[i] and finished it at time endTime[i].
  
      Return the number of students doing their homework
      at time queryTime. More formally, return the number
      of students where queryTime lays in the
      interval [startTime[i], endTime[i]] inclusive.
    */
    /*
      Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
      Output: 1
      Explanation: We have 3 students where:
      The first student started doing homework at time
        1 and finished at time 3 and wasn't doing anything at time 4.
      The second student started doing homework at time
        2 and finished at time 2 and also wasn't doing anything at time 4.
      The third student started doing homework at time
        3 and finished at time 7 and was the only student
        doing homework at time 4.
    */
    studentsDoingHomeworkAtAGivenTime(startTime, endTime, queryTime) {
        let total = 0;
        for (const i in startTime)
            if (startTime[i] <= queryTime && endTime[i] >= queryTime)
                total++;
        return total;
    },
    /*
      On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
  
      You can move according to the next rules:
  
      In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
      You have to visit the points in the same order as they appear in the array.
    */
    /*
      Input: points = [[1,1],[3,4],[-1,0]]
      Output: 7
      Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
      Time from [1,1] to [3,4] = 3 seconds
      Time from [3,4] to [-1,0] = 4 seconds
      Total time = 7 seconds
    */
    minimumTimeVisitingAllPoints(points) {
        let total = 0;
        for (let i = 0; i < points.length - 1; i++) {
            const index0Seconds = Math.abs(points[i][0] - points[i + 1][0]);
            const index1Seconds = Math.abs(points[i][1] - points[i + 1][1]);
            const bigger = index0Seconds > index1Seconds ? index0Seconds : index1Seconds;
            total += bigger;
        }
        return total;
        function getDifference(a, b) {
            return Math.abs(a - b);
        }
    }
};
