/**
 * Concatenates an array so that nums[i] and nums[nums.length + i] are identical values.
 * For example: [1, 2, 1]    becomes [1, 2, 1, 1, 2, 1]
 *              [1, 3, 2, 1] becomes [1, 3, 2, 1, 1, 3, 2, 1]
 * @param {number[]} nums
 * @return {number[]}
 */

// Iterative Approach
const getConcatenation = nums => {
    // Create a new array, double the size of nums.
    const result = new Array(nums.length * 2);
    
    // O(n) loop over every item within nums.
    for (let i=0; i < nums.length; i++) {
        // Set the first value.
        result[i] = nums[i]
        // Set the concatenated value.
        result[nums.length + i] = nums[i]
    }
    
    // Iteration complete, return the resulting array.
    return result
}

////////////////////////////////////////////////////////////////////////////////////////

// Spread approach
// const getConcatenation = nums => {
//     // Return a new array, which spreads the original array into it twice.
//     return [...nums, ...nums]
// }