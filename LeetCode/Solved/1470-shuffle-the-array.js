/**
 * Iterates over the half of an array and shuffles all array items into a
 * new array, so that the items are ordered as follows:
 * [x1, x2, x3, y1, y2, y3] becomes [x1, y1, x2, y2, x3, y3]
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 const shuffle = (nums, n)  => {
    // A new array containing the shuffled items.
    const newNums = []
    
    // O(nums/2) loop over half of the array,
    for (let i=0; i < n; i ++) {
        // The item on the left half of the array.
        const leftItem = nums[i]
        // The item on the right half of the array.
        const rightItem = nums[i+n]
        
        // Push the left/right items onto the new array.
        newNums.push(leftItem, rightItem)
    }
    
    // Return the new array.
    return newNums
}