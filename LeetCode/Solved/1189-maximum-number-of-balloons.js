/**
 * Return the maximum number of 'balloon' strings present
 * @param {string} text
 * @return {number}
 */
 const maxNumberOfBalloons = text => {
    // Edge case: No text.
    if (!text) return 0

    /* Create a dictionary of keys that hold the characters in 'balloon'.
       Initialise each value to 0. */
    const dict = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
        
    // O(n) loop over every character in the string of text.
    for (let i=0; i < text.length; i++) {
        // The character.
        const char = text[i]
        
        // The character exists within the dictionary.
        if (dict[char] !== undefined) {
            // Increase the count for that character within the dictionary.
            dict[char] = dict[char] + 1
        }
    }

    /* Return the minimum value between all of the characters in the dictionary.
       'l' and 'o' both occur twice in the word 'balloon'. Divide their values by 2 and round down. */
    return Math.min(dict['b'],
                    dict['a'], 
                    Math.floor(dict['l'] / 2), 
                    Math.floor(dict['o'] / 2), 
                    dict['n'])
}