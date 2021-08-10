/**
 * Given a zero-based permutation nums[] (0-indexed), build an array ans[]
 * of the same length, where ans[i] = nums[nums[i]] for each 0 <= i < nums.length.
 *
 * @param {number[]} nums
 * @return {number[]} ans
 */
 const buildArray = nums => {
    // Stores the permutated array values.
    const ans = []
    
    // O(n) loop over every item within the array.
    for(let i=0; i < nums.length; i++) {
        // Shift the value from nums[i] to nums[nums[i]] and push it into the new array.
        ans.push(nums[nums[i]])
    }
    
    // Iteration done. Return the permutated array.
    return ans
}