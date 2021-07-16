/**
 * Determine the length of the last word in a string.
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = s => {   
    /* Create an array of words using:
       - .trimEnd() to remove trailing whitespace.
       - .split(' ') to create the array of words, splitting at each space in the string. */
    const words = s.trimEnd().split(' ')
    // The last word is the last entry in the words array.
    const lastWord = words[words.length-1]
    
    return lastWord.length
}