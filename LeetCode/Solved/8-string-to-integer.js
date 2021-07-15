/**
 * Converts a string to an integer.
 *
 * If non-numeric characters exist within the string, it outputs any numbers
 * that were encountered before the non-numeric character.
 *
 * If the string starts with a polarity indicator (+ OR -), 
 * that will determine the polarity of the number that gets returned.
 *
 * @param {string} s
 * @return {number}
 */
 const myAtoi = s => {
    // Edge case: The string doesn't exist.
    if (!s) return 0
    
    // Dictionary containing all numeric characters.
    let dict = {
        '0': 0,
        '1': 1, '2': 2, '3': 3,
        '4': 4, '5': 5, '6': 6,
        '7': 7, '8': 8, '9': 9
    }
    
    // Remove any beginning whitespace from the string.
    var string = s.trimStart()
    // Stores the number we retrieve.
    let numberArray = []
    
    // O(n) loop over every character in the string.
    for (let i=0; i < string.length; i++) {
        // The current character.
        const char = string[i]

        // First iteration of the string. Check if polarity is indicated.
        if (i === 0) {
            // Polarity is negative
            if (char === '-') {
                // push the negative character onto the numberArray.
                numberArray.push('-')
                continue
            } else if (char === '+') {
                continue
            }
        }
        
        // The character is numeric.
        if (dict[char] !== undefined) {
            // Push the character onto the numberArray.
            numberArray.push(dict[char])
        // The character is NOT numeric.
        } else {
            // Exit the loop.
            break
        }
    }
    
    // Determine upper/lower bounds
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    
    // Convert numberArray into a number
    let number = parseInt(numberArray.join(''))
    
    // Number is less than lower bound.
    if (number < INT_MIN) {
        // Set number to lower bound.
        number = INT_MIN
    // Number is greater than upper bound.
    } else if (number > INT_MAX) {
        // Set number to upper bound.
        number = INT_MAX
    }
    
    // Return the number, or 0 if number is invalid.
    return number || 0
}