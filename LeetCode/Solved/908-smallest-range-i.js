/**
 * Given an array of numbers and an integer K, find the smallest and largest values in the array,
 * add K to the smallest value, subtract K from the largest value, and return the difference between
 * the new smallest and largest values.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const smallestRangeI = (nums, k) => {
  // Return 0 if array isn't large enough.
  if (nums.length < 2) return 0

  /* Initlaize smallest/largest variables, which will capture the min/max in the array.
     Use Infinity bounds to start, this ensures the initial comparison will work. */
  let smallest = Infinity
  let largest = -Infinity

  // O(n) loop over each item in the array
  for (let i = 0; i < nums.length; i++) {
      // If the item is smaller than the current smallest value.
      if (nums[i] < smallest) {
          // Save the new smallest value.
          smallest = nums[i]
      }
      // If the item is larger than the current largest value.
      if (nums[i] > largest) {
          // Save the new largest value.
          largest = nums[i]
      }
  }

  // Add K to the smallest value.
  smallest = smallest + k
  // Subtract K from the largest value.
  largest = largest - k

  // Find the range between smallest and largest.
  const range = largest - smallest
  
  // Return range if it's a positive value.
  if (range > 0){
      return range
  // If  range is not a positive value, return 0.
  } else {
      return 0
  }
}