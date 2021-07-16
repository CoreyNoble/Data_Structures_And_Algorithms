/**
 * Determines if there is only a unique number of occurences for each value within an array.
 * @param {number[]} arr
 * @return {boolean}
 */
 const uniqueOccurrences = arr => {
  /* Dictionary to store each array value as a key, 
     and each occurence of the key as an incremented count for its value. */
  const occurences = {}
  // Set to push all occurence values into, for comparison to determine if there's been a match.
  const setOfOccurenceValues = new Set()
  // Boolean value to return.
  let matchingOccurences

  // Iterate over each item in the array.
  arr.forEach((item) => {
      // Build up the occurences dictionary, icreasing the count for each occurence.
      occurences[item] = occurences[item] + 1 || 1
  })
  
  // Iterate over the occurences dictionary.
  for (let key in occurences) {
      // Build up the set of occurence values.
      setOfOccurenceValues.add(occurences[key])
  }
  
  // If number of occurences matches the size of the set, all occurences are unique.
  if (Object.keys(occurences).length === setOfOccurenceValues.size) {
      matchingOccurences = true
  // Otherwise, one or more occurences is identical.
  } else {
      matchingOccurences = false
  }
  
  // Return whether we found matching occurences or not.
  return matchingOccurences
}