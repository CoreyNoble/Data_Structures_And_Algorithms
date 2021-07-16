/**
 * Finds the longest common prefix in an array of strings.
 * For example: ['abc', 'abcde', abcdefg'] = 'abc'
 *              ['there', 'is', 'no', longest', 'common', 'prefix'] = ''
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = strs => {
    // Edge case: There are no strings.
    if (!strs.length) return ''

    // Initialise the prefix to the first string.
    let prefix = strs[0]

    // Iterate over every string in the array, not including the first item.
    for (let i=1; i < strs.length; i++) {  
        // Entire prefix string is not present within the current string.
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove one character off the end of the prefix string.
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }

    /* Returns the common prefix if any beginning characters matched for every
       string within the array. Otherwise, returns an empty string. */
    return prefix
}