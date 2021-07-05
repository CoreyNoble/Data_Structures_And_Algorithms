/**
 * Find the longest word within the given array, of which, all characters before
 * the last character in the word exist as an entity within the array.
 * If multiple words of the same length exist, only return the word with the 
 * smallest lexicograpgical order (eg. show 'c' if 'c','d','e').
 *
 * For example: ["w", "wo", "wor", "worl", "world"] = "world".
 *              ["a","banana","app","appl","ap","apply","apple"] = "apple"
 *              ^ - Both 'apple' and 'apply' work, so return 'apple' (e < y).
 * @param {string[]} words
 * @return {string}
 */
 const longestWord = (words) => {
  // Stores the words we've encountered.
  const dict = {}
  // Will store the result if we find one.
  let result = ""
  
  // Sort the list of words, to ensure we encounter substrings of larger words first.
  words.sort()
  
  // Iterate over each word.
  words.forEach(word => {
      /* If the word is only one character OR 
         a sub-string of the word, minus the last character, exists within the dictionary */
      if (word.length === 1 ||
          dict[word.substring(0, word.length-1)]
      ) {
          // The word is longer than the current result.
          if (word.length > result.length) {
              // Set the new result to the current word.
              result = word
          }
          
          // Save the current word into the dictionary.
          dict[word] = word
      }
  })
  
  // Found the longest valid word.
  return result
};