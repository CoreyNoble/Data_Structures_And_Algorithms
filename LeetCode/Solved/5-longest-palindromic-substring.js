/**
 * Finds and returns the longest panindrome substring (eg. 'abba' in 'babbad')
 *
 * @param {string} s // the string input
 * @return {string} // the longest palindrome substring
 */
 const longestPalindrome = function(s) {
  // when the string is empty, return the longest palindrome, which is an empty string
  if (!s || s.length < 1) return '';
  
  // the boundaries which we grab a final substring at the end to return from
  let start = 0;
  let end = 0;
  
  // O(n) loop
  for (let i=0; i < s.length; i++) {
      // Get the longest palindrome for (i) in the cases where the middle of the string is:
      // An odd number (eg. 'racecar'). Left and right are the same index
      let len1 = expandFromMiddle(s, i, i);
      // An even number (eg. 'abba'). Left and right are different indexes
      let len2 = expandFromMiddle(s, i, i+1);
      // The maximum value between the two calculated substring lengths
      const len = Math.max(len1, len2);
      
      // Found a longer palindromic substring.
      if (len > end - start) {
          // i is the center of our substring.
          // start/end boundaries are half of the palindrome length from i.
          start = i - Math.floor((len - 1) / 2);
          end = i + Math.floor(len / 2);
      }        
  }
  
  return s.substring(start, end + 1);
}

/**
* Find and return the length of the longest palindromic substring 
* after expanding out from the middle
*
* @param {string} s // the string input
* @param {int} left // the starting indicy
* @param {int} right // the ending incidy
* @returns {int} // the length of the longest palindromic substring
*/
const expandFromMiddle = function(s, left, right) {
  // There's no palindromic substring to return
  if (!s || left > right) return 0;
  
  // O(n) loop
  // Expand the boundaries of the palindromic substring
  while (left >= 0 && right < s.length &&
         s[left] === s[right]
  ) {
      left--;
      right++;
  }
  
  // higher value - lower value - 1 because we're dealing with 0 based indicies
  return right - left - 1;
}