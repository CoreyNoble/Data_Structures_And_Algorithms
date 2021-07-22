/**
 * Find the only unique number in a non-empty array of integers.
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = nums => {
    // Edge case: Only one value in the array.
    if (nums.length === 1) return nums[0]
    
    // Holds the unique value.
    let result = 0
    
    // O(n) loop over every element within the array.
    for (let i=0; i < nums.length; i++) {
        /* Update the result by setting it to: result ^(XOR) nums[i].
        
           XOR performs a Boolean exclusive OR operation on each bit of its integer arguments.
           (bits of 1 = 0000 0001, bits of 2 = 0000 0011)
           
           Definition of XOR: One or the other, not both.
           - 0 XOR 0 = 0
           - 0 XOR 1 = 1
           - 1 XOR 0 = 1
           - 1 XOR 1 = 0
                      
           Bitwise XOR equation examples:
           - 2^2 equates to: 0000 0011 ^ 0000 0011. 
           -- result = 0000 0000 = 0.
           
           - 0^1 equates to: 0000 0000 ^ 0000 0001.
           -- result = 0000 0001 = 1.
           

           If all but one value in the array is unique, eventually each duplicate value will
           cancel eachother out during the bitwise operations.
           
           A running example:
           nums = [2, 2, 1, 3, 4, 3, 4]
           
           - result = 0, nums[0] = 2
           --- 0 ^ 2 = 2
           
           - result = 2, nums[1] = 2
           --- 2 ^ 2 = 0
           
           - result = 0, nums[2] = 1 
           --- 0 ^ 1 = 1
           
           - result = 1, nums[3] = 3
           --- 1 ^ 3 = 2
          
           - result = 2, nums[4] = 4
           --- 2 ^ 4 = 6
           
           - result = 6, nums[5] = 3
           --- 6 ^ 3 = 5
           
           - result = 5, nums[6] = 4 
           --- 5 ^ 4 = 1 */
        result = result ^ nums[i]        
    }
    
    // Found the unique value.
    return result
}