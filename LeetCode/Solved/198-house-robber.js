/**
 * Determine the maximum value that can be summed from an array of numbers, 
 * without touching adjacent elements when adding to the maximum value.
 * For example: [1, 2, 3, 1] = 4
 *              ^ The max value is 1 + 3 = 4. Not 2 + 1 = 3.
 *              [2, 7, 9, 3, 1] = 12
 *              ^ The max value is 2 + 9 + 1 = 12
 *              [1, 2, 3, 1, 1, 100]
 *              ^ The max value is 1 + 3 + 100 = 103. 
 *                This example skips over two, proof that the max value isn't
 *                always odd or even loop comparisons.
 * 
 * The proposed scenario for calculating this is to rob the most money from 
 * houses without adjacently connected camera systems, to avoid detection.
 * @param {number[]} nums
 * @return {number}
 */
 const rob = nums => {
  // Edge case: No numbers.
  if (nums.length === 0) return 0

  /* Set the template for a dynamic programming (DP) solution.
     All DP problems use a similar template */
  // Initialise an array to store our previously calculated max values.
  const dp = []

  // Initialise the DP base case values:
  // A value of 0 at index 0.
  dp[0] = 0
  // The first value in the nums array set to index 1.
  dp[1] = nums[0]
  
  // O(n) loop over every number within the nums array.
  for (let i=1; i < nums.length; i++) {
      /* Calculate the newest maximum value.
         Set the next item in the DP array to the maximum value between:
         - The current maximum value in DP OR
         - the previous maximum value plus the current nums[i] value.
      */
      dp[i+1] = Math.max(dp[i],
                         dp[i-1] + nums[i])
  }
  
  /* Iteration complete. Return the last item in the DP array,
    which stores the maximum amount that was possible to rob. */
  return dp[nums.length]
}