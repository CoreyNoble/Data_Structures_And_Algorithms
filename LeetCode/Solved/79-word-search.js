/**
 * Determines if a word exists within a 2d array of words.
 * The word can exist in a line horizontally, vertically, or a mix between the two.
 *
 * For example, given the word 'YES' and the following 2d arrays:
 *
 * ['Y', 'E', 'S', 'A'],
 * ['B', 'C', 'D', 'E'],
 * ['F', 'G', 'H', 'I']
 * = TRUE,
 * The word exists horizontally within the grid.
 * 
 * ['Y', 'B', 'F', 'A'],
 * ['E', 'C', 'D', 'E'],
 * ['S', 'G', 'H', 'I']
 * = TRUE,
 * The word exists vertically within the grid.
 *
 * ['Y', 'B', 'F', 'A'],
 * ['E', 'S', 'D', 'E'],
 * ['C', 'G', 'H', 'I']
 * = TRUE
 * The word exists as a mix of horizontal and vertical characters within the grid.
 *
 * ['Y', 'B', 'F', 'A'],
 * ['D', 'S', 'E', 'E'],
 * ['C', 'G', 'H', 'I']
 * = FALSE,
 * The sequence of characters does not exist to create the word.
 *
 * @param {character[][]} board // The 2d array we're traversing.
 * @param {string} word // The word we're searching for.
 * @return {boolean}
 */
 const exist = (board, word) => {
    // O(n) loop over every row within the 2d array.
    for (let row=0; row < board.length; row++) {
        // O(n) loop over every column within the 2d array.
        for (let col=0; col < board[row].length; col++) {
            /* - Current character matches the first character in the word AND
               - Depth First Search checking for a word match returns true. */
            if (board[row][col] === word.charAt(0) &&
                dfs(board, row, col, 0, word)
            ) {
                // Word is found.
                return true
            }
        }
    }
    
    // Word does not exist within the 2d array.
    return false
}

/**
 * Uses Depth First Search off of the current node, to check for the existence of the
 * next character in the word, adjacent to the current character.
 *
 * @param {character[][]} board // The 2d array we're traversing.
 * @param {int} row // The current row within the 2d array we're traversing.
 * @param {int} col // The current column within the 2d array we're traversing.
 * @param {int} charIdx // The current index of the character we're looking to match.
 * @param {string} word // The word we're searching for.
 * @return {boolean}
 */
const dfs = (board, row, col, charIdx, word) => {
    // Word length matches character index, word is found.
    if (charIdx === word.length) return true
    
    // Traversing out of bounds, or the character does not match what we're looking for.
    if (row < 0 || row > board.length-1 ||
        col < 0 || col > board[row].length-1 ||
        board[row][col] !== word.charAt(charIdx)
    ) {
        // Word doesn't exist on this path.
        return false
    }
    
    // At this point, the word is not yet found, but the next character has been found.
    
    /* To ensure we don't traverse over the same character more than once, save the 
       current character in a temporary variable, then replace the current character 
       with a 'visited' character, prior to recursing through the grid again. */
    const temp = board[row][col]
    board[row][col] = " "
    
    /* Recurse this method again, checking for the next character (charIdx+1), 
       looking down, up, right and left from the current character. */
    let found = dfs(board, row+1, col, charIdx+1, word) ||
                dfs(board, row-1, col, charIdx+1, word) ||
                dfs(board, row, col+1, charIdx+1, word) ||
                dfs(board, row, col-1, charIdx+1, word)
    
    // DFS off of the current character is complete.
    
    // Restore the character in the grid to its previous value.
    board[row][col] = temp
    
    // Return the boolean that states whether or not the word was found.
    return found
}