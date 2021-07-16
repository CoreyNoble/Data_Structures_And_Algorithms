/**
 * Returns the length of the longest continuous increasing subsequence (LCIS) in an array.
 * For example: [1,3,5,4,7] = 3, because 3>1, 5>3, but 4<5.
 *              [2,2,2,2,2] = 1.
 *              [1,3,5,7,9] = 5.
 * @param {number[]} nums
 * @return {number} // the length of the LCIS
 */
 const findLengthOfLCIS = nums => {   
  // Keeps track of the LCIS.
  let result = 0
  // Keeps track of where to count back to when calculating the current LCIS.
  let anchor = 0

  // O(n) loop over every value in the array.
  for (let i=0; i < nums.length; i++) {
      // Determine if we need to set a new anchor value.
      // Only set a new anchor IF:
      // -- Edge case: i is NOT 0, AND...
      // -- the previous value to i is greater than or the same as the current value.
      if (i > 0 &&
          nums[i-1] >= nums[i]
      ) {
          // Set a new anchor value.
          anchor = i
      }
      
      // Determine the current LCIS by subtracting i (greatest) from anchor (smallest). 
      // + 1 to account for indices.
      const currentResult = i - anchor + 1
      
      // Set a new result, to the greatest number between result and currentResult.
      result = Math.max(result, currentResult)
  }
  
  // Found the LCIS, return it.
  return result
}