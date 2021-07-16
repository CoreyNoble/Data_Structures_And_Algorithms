/**
 * Find the largest continuous sub-array where if sorted, the entire array would become sorted.
 * @param {number[]} nums
 * @return {number} // the length of the sub-array
 */
 const findUnsortedSubarray = nums => {
  // Array is too small, exit with 0.
  if (nums.length < 2) return 0

  // Initialise min and max values to the highest/lowest possible integers.
  let minUnsortedValue = Infinity
  let maxUnsortedValue = -Infinity
  
  // Find the miminim value that needs to be sorted.
  /* Start at the left side of the array, iterate right.
     (+1 because we're comparing against the value to the left)
  */
  for (let i = 1; i < nums.length; i++) {
      // current value is less than the one before it.
      if (nums[i] < nums[i-1]) {
          // set the minimum value between the one found, and the one previously set.
          minUnsortedValue = Math.min(minUnsortedValue, nums[i])
      }
  }
  
  // Find the maximum value that needs to be sorted.
  /* Start at the right side of the array, iterate left.
     (-2 because we're comparing against the value to the right, and accounding for 0 based incicies)
  */
  for (let i = nums.length - 2; i >= 0; i--) {
      // current value is greater than the one after it.
      if (nums[i] > nums[i+1]) {
          // set the maximum value between the one found, and the one previously set.
          maxUnsortedValue = Math.max(maxUnsortedValue, nums[i])
      }
  }
  
  let leftIdx
  let rightIdx
  
  // Iterate front-to-back through the array to find where the minimum value should reside.
  for (leftIdx = 0; leftIdx < nums.length; leftIdx++) {
      // minimum is less than the index, the index is where the unsorted sub-array begins.
      if (minUnsortedValue < nums[leftIdx]) {
          break
      }
  }
  
  // Iterate back-to-front through the array to find where the maximum value should reside.
  for (rightIdx = nums.length - 1; rightIdx >= 0; rightIdx--) {
      // maximum is less than the index, the index is where the unsorted sub-array ends.
      if (maxUnsortedValue > nums[rightIdx]) {
          break
      }
  }

  /* If right - left isn't a positive intiger, return 0.
     Otherwise, return right - left + 1 to account for 0 based indicies */
  return rightIdx - leftIdx < 0 ? 0 : rightIdx - leftIdx + 1
}