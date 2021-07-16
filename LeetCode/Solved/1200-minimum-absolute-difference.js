/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 const minimumAbsDifference = arr => {
  let minDiff
  const minDiffPairs = []
  
  // Sort the array from least to greatest
  arr.sort((a, b) => {
      return a - b
  })
  
  // Iterate over the array and find the minimum difference between all of the sorted values
  /* Starting at 1 because we'll be checking the right(i) against the left(i-1), 
     and ensure we don't go out of bounds [arr.length]. */
  for (let i=1; i < arr.length; i++) {
      const left = arr[i-1]
      const right = arr[i]   
      const currDiff = right - left
      
      // Compare the current difference with the minimum difference, maintain the lowest value.
      if (!minDiff) {
          minDiff = currDiff
      } else {
          minDiff = Math.min(currDiff, minDiff)
      }        
  }
  
  // Iterate over the array again to find and set the pairs that match the minimum difference.
  for (let i=1; i < arr.length; i++) {
      const left = arr[i-1]
      const right = arr[i]
      const currDiff = right - left
      
      // The difference between right and left match the minimum difference.
      if (currDiff === minDiff) {
          // Push the pair into the list of minimum difference pairs.
          minDiffPairs.push([left, right])
      }
  }
  
  return minDiffPairs
}