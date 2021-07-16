/**
 * Finds the Judge in the town of people.
 * The Jugde trusts nobody, and everybody else trusts the judge.
 * @param {number} n // The number of people in the town
 * @param {number[][]} trust // The array of trust relationship pairs (i.e. [ [1,3], [2,3] ]).
                             // The first index in each pair trusts the last index.
                            // In this example, 1 trusts 3, 2 trusts 3, 3 trusts nobody.
* @return {number} // Either the person that is the judge, or -1 if there is no judge.
*/
const findJudge = (n, trust) => {
  // Handle edge cases with inputs.
  // No comparisons, only one person.
  if (!trust.length && n === 1) return 1
  // No comparisons, more/less than one person.
  if (!trust.length && n !== 1) return -1

  // Assigns a trust score for each person.
  const trustScores = {}

  // O(n) loop over each trust pair.
  for (let i = 0; i < trust.length; i++) {  
      // O(n) loop over each trust relationship.
      trust[i].forEach((currentPerson, idx) => {
          // Only iterate until the end of the array -1, as we're comparing against the next person in the list.
          if (idx !== trust[i].length - 1) {
              // The person we compare against.
              const nextPerson = trust[i][idx+1]

              // Assign / Decrement the currentPerson trustScore, as they trust someone else.
              if (!trustScores[currentPerson]) {
                  trustScores[currentPerson] = -1
              } else {
                  trustScores[currentPerson] = trustScores[currentPerson] - 1
              }

              // Assign / Increment the nextPerson trustScore, as they are trusted.
              if (!trustScores[nextPerson]) {
                  trustScores[nextPerson] = 1
              } else {
                  trustScores[nextPerson] = trustScores[nextPerson] + 1
              }
          }
      })
  }
  
  // O(n) loop over each persons' trust score.
  for (const person in trustScores) {
      // The person is trusted by everyone minus themself.
      if (trustScores[person] === n - 1) {
          // Found the Judge.
          return person
      }
  }
  
  // Nobody is the Judge.
  return -1
}