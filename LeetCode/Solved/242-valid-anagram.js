/**
 * Determines if two strings are valid anagrams of eachother.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isAnagram = (s, t) => {
  // Edge case: String lengths don't match, can't be valid.
  if (s.length !== t.length) return false

  /* Stores each chatacter as a key, and each value as 
     an integer to count the number of occurences for that character. */
  const charDict = {}
  
  // O(n) loop over the first string.
  for (let i=0; i < s.length; i++) {
      // Store the character in the dictionary if it doesn't exist.
      if (!charDict[s[i]]) {
          // Set the initial value of the character to 1.
          charDict[s[i]] = 1
      // The character is already stored.
      } else {
          // Increment the value by 1.
          charDict[s[i]]++
      }
  }
  
  // O(n) loop over the second string.
  for (let i=0; i < t.length; i++) {
      // If the character does not exist.
      if (!charDict[t[i]]) {
          // This is NOT an anagram of the first string.
          return false
      } else {
          // Character match found, decrement its value in the dictionary.
          charDict[t[i]]--
      }
  }

  // O(n) loop over the character dictionary
  for(let key in charDict) {
      // If the value of the character is not 0, it is not an anagram.
      if (charDict[key] !== 0) return false
  }
  
  // Both strings are anagrams of eachother.
  return true    
};