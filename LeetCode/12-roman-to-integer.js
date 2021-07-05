/**
 * Calculates the integer value of a string of roman numerals.
 * @param {string} s // The string of roman numerals.
 * @return {number}
 */
 const romanToInt = (s) => {
    // Edge case: string is empty, return 0.
    if (!s.length) return 0

    // Holds the final value.
    let total = 0
    // Holds the previously iterated value.
    let previousValue = 0
    // Holds the current value.
    let currentValue = 0

    // Maps each roman numeral character to an integer value.
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    // O(n) loop over every character in the string of roman numerals.
    for (let i = 0; i < s.length; i++) {
        // Current value which maps to the character value in the dictionary.
        currentValue = dict[s[i]]
        
        /* Current value is less than the previous. Need to account for 4/9
           For example: 'III' = 3, 'IV = 4', 'V' = 5
                         'VIII' = 8, 'IX' = 9, 'X' = 10 */
        if (currentValue > previousValue) {
            /* Add current value to the total, Then subtract double the previous value. 
               We double this subtratction because we already added it, 
               so we need to negate the previous addition.

               For example:  'IX': 
                             total = 1 ('I'), current = 10 ('X'), previous = 1 ('I')
                             
                             total(1) + current(10) = 11
                             2 * previous(1) = 2
                             11 - 2 = 9 */
            total = (total + currentValue) - (2 * previousValue)
        } else {
            total += currentValue
        }

        // Set the new previous value.
        previousValue = currentValue
    }
    
    // Total has been calculated.
    return total;
};