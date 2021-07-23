/**
 * Remove all occurences of a given number from an integer array.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = (nums, val) => {
    // O(n) loop over every item in the integer array.
    for (let i=0; i < nums.length; i++) {
        // The current value matches the value to remove.
        if (nums[i] === val) {
            // Remove the item from the array.
            nums.splice(i, 1)
            // Decrement the iteration counter since the array has shifted left.
            i--
        }
    }
        
    // All 'val' have been removed from the integer array.
    return nums.length
}