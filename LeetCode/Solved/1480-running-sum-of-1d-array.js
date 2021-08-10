/**
 * Converts an array of numbers into a running sum array
 * For example: [1, 1, 1, 1, 1] becomes [1, 2, 3, 4, 5]
 *              [1, 2, 3, 4] becomes [1, 3, 6, 10]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 const runningSum = nums => {
    // O(n) loop over every item within the array, starting at the second index.
    for (let i=1; i < nums.length; i++) {
        // Mutate the array by adding the previous value to the current value.
        nums[i] += nums[i-1]
    }
    
    // Done iteration, return the running sum array.
    return nums
}