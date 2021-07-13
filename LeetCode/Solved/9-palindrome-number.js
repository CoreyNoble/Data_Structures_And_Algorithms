/**
 * Determines if a number is a palindrome.
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = x => {
    // Edge case: x doesn't exist.
    if (x == null || x < 0) return false
    // Edge case: x is 0.
    if (x === 0) return true

    // Convert x to a string of characters.
    const s = x.toString()
    
    // Set left and right variables equal to the upper/lower bounds of the string.
    let left = 0
    let right = s.length - 1
    
    // O(n/2) loop over half of the characters in the string.
    // While left and right don't overlap.
    while (left < right) {
        // Left and right characters are a match.
        if (s[left] === s[right]) {
            // Increment left, decrement right.
            left++
            right--
        // Left and right characters are not a match.
        } else {
            // Integer is not a palindrome.
            return false
        }
    }
    
    // Traversed the whole string, integer is a palindrome.
    return true
}