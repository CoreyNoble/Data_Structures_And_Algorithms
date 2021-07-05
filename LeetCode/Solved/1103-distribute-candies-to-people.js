/**
 * Distribute candies to people.
 * Each person gets (i + 1) + (loops * people) candies until none remain.
 * Examples: 
 *     4 people, 7 candies: [1,2,3,1]
 *       [0] = 1, because 1 candy for first index (i+1), no loops before we run out.
 *       [1] = 2, because 2 candies for the second index (i+1), no loops before we run out.
 *       [2] = 3, because 3 candies for the third index (i+1), no loops before we run out.
 *       [3] = 1, because only one candy remains (7-1-2-3 = 1).
 *
 *     3 people, 10 candies: [5,2,3]
 *       [0] = 5, because 1 candy for the first index (i+1) 
 *                + 4 candies for the first index (i+1) on the first loop (loops * people).
 *       [1] = 2, because 2 candies for the second index (i+1), no loops before we run out.
 *       [2] = 3, because 3 candies for the third index (i+1), no loops before we run out.
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 const distributeCandies = (candies, num_people) => {
  // Keeps track of how many candies remain.
  let remainingCandies = candies
  // Keeps track of how many loops occur.
  let loops = 0
  // Stores the amount of candies each person recieves.
  const distributedCandies = {}
  
  // Iterate until no candies remain.
  while (remainingCandies) {
      // Iterate over every person.
      for (let i = 0; i < num_people; i++) {    
          // The person doesn't yet exist in the dictionary, initialise them.
          if (!distributedCandies[i]) {
              distributedCandies[i] = 0;
          }

          // Calculate how many candies to give to the current person.
          let amountToBeGiven = (loops * num_people) + (i + 1)
          
          // If we should give out more candies than we have remaining.
          if (remainingCandies < amountToBeGiven) {
              // Give the rest of the candies to that person.
              distributedCandies[i] = distributedCandies[i] + remainingCandies
              remainingCandies = 0
          // We have enough candies remaining.
          } else {
              // Give the appropriate amount of candies to the person.
              remainingCandies = remainingCandies - amountToBeGiven
              distributedCandies[i] = distributedCandies[i] + amountToBeGiven                
          }
      }
      
      // We've iterated over each person, increment the loops counter.
      loops ++
  }
  
  // We have given out all of the candies. Return the value each person recieved.
  return Object.values(distributedCandies)
}