/**
 * Reverses an integer so that each of its character values are on opposite ends.
 * For example: 123 -> 321
 *              -123 -> -321
 *              120 -> 21
 *              0 -> 0
 * Ensures the reversed integer is 32 bits, otherwise, return 0.
 * @param {number} x
 * @return {number}
 */
 const reverse = x => {
  // String representation of the number.
  let s = x.toString()
  // Array that will hold the reverse values of the number.
  let flippedString = []
  
  // Iterate backwards through each character within the string.
  for (let i = s.length - 1; i > -1; i--) {
      /* Push the character into the flippedString array.
         The end result is the inverse characters of the string 
         are stored in-order within the flippedString array. */
      flippedString.push(s[i])
  }
  
  // Convert the array into a string and parse it as an integer.
  let reversed = parseInt(flippedString.join(''))

  // Original integer was negative.
  if (x < 0) {
      // Flip polarity of the reversed integer.
      reversed = 0 - reversed
  }
  
  // Edge case: reversed integer is out of 32 bit integer bounds.
  if (reversed > Math.pow(2, 31) - 1 ||
      reversed < Math.pow(2, 31) * -1
  ) {
      // Set to 0.
      reversed = 0
  }
  
  // Return the reversed value.
  return reversed
}