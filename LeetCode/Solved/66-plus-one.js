/**
 * Adds 1 to the last digit in an array of decimal digits of non-negative integer(s).
 * Propogates addition to the left if the current value is 10 after addition.
 * For example: [9] = [1,0]
 *              [9,9] = [1,0,0]
 *              [1,2,3] = [1,2,4]
 *              [8,9,9,9] = [9,0,0,0]
 * @param {number[]} digits
 * @return {number[]}
 */
 const plusOne = digits => {
    // Edge case: No digits.
    if (!digits.length) return []
    
    /* A recursive function that adds one and propogates the additon if needed.
     * @param digits // The decimal array
     * @param idx    // The current traversed index of the array, 
     * @returns {void}
    */
    const recursivelyAddOne = (digits, idx) => {
        // Increase the current digit by one.
        digits[idx]++

        // The current digit is now 10.
        if (digits[idx] === 10) {
            // Set the current digit to 0.
            digits[idx] = 0
            
            // A digit exists to the left of the current digit.
            if (digits[idx-1]) {
                // Recurse left, add to that digit as well.
                recursivelyAddOne(digits, idx-1)
            // No digit exists to the left of the current digit.
            } else {
                // Add a 1 digit to the left of the array. exit recursion.
                digits.unshift(1)
            }
        }
    }
    
    // Initialise the recursive function, pass in the array and its last index.
    recursivelyAddOne(digits, digits.length-1)
    
    // Digit has been added to the decimal array.
    return digits
}