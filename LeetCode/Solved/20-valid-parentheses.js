/**
 * Determine if a string contains valid sets of parentheses.
 * For example, "()" = true
 *              "()[]{}" = true
 *              "(]" = false
                "([)]" = false
                "{[]}" = true
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    // String is an odd number of characters, must be false.
    if (s.length % 2 !== 0) return false;
    
    // Will keep track of open/close parentheses pairs using a stack data structure.
    const stack = [];

    // O(n) loop over every character within the string.
    for (var i=0; i < s.length; i++) {
        // The top item in the stack
        const topItem = stack[stack.length-1];

        // Current character is an open parentheses.
        if (s[i] === '{' ||
            s[i] === '[' ||
            s[i] === '('
        ) {
            // Push the current character onto the stack.
            stack.push(s[i]);
        /* Current character is a close parentheses, AND... 
           It's a match to the top item's open parentheses. */
        } else if (s[i] === '}' && topItem === '{' ||
                   s[i] === ']' && topItem === '[' ||
                   s[i] === ')' && topItem === '('
        ) {
            // A pair is created. Remove the top item from the top of the stack.
            stack.pop();
        // Neither an open parentheses, or a match.
        } else {
            // The string is NOT valid.
            return false;
        }
    }
    
    // Stack still has items within it.
    if (stack.length) {
        // One or more parentheses remains unclosed, the string is NOT valid.
        return false;
    }
    
    // The string is valid
    return true;
};