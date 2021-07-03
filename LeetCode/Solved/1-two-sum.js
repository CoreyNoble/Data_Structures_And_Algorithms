/**
 * Returns two array indicies that add up to the target value.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // Edge case: nums array or target values don't exist.
  if (!nums || target == null) return []
  
  // A dictionary that stores the previously iterated array values and their indicies.
  const previousValues = {}
  // Will store the incicy pair to return.
  let indicies = []

  // O(n) loop over every item in the array.
  for (let i=0; i < nums.length; i++) {
      // The current array item value.
      const value = nums[i]
      // The complimentary value we need to find in-order to create a pair.
      const compliment = target - value

      // If the complimentary value exists within our dictionary.
      if (previousValues[compliment] !== undefined) {
          // Found a pair, push the pair to the indicies array.
          indicies.push(previousValues[compliment], i)
          // Exit the loop.
          break
      }
      
      // Store the array value and its indicy in the dictionary.
      previousValues[value] = i        
  }
  
  // Return the indicies that add up to the target value.
  return indicies
};