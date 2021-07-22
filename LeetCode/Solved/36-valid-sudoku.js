/**
 * Determines if a 9x9 2D array contains a valid sudoku.
 * @param {character[][]} board
 * @return {boolean}
 */
 const isValidSudoku = board => {   
    // Stores values seen upon iteration.
    let set = new Set()
    // Stores the current number we're checking.
    let curNum

    // Check all rows.

    // O(9²) loop over every row / column in the board.
    for (let row=0; row < board.length; row++) {
        for (let col=0; col < board[row].length; col++) {
            curNum = board[row][col]
            
            // Number is empty.
            if (curNum === '.') {
                continue
            // Number doesn't exist in the set.
            } else if (!set.has(curNum)) {
                // Add number to the set.
                set.add(curNum)
            // Number already exists in the set.
            } else {
                // Not a valid sudoku.
                return false
            }
        }
    
        // Reset the set, check the next row.
        set = new Set()
    }
    
    // Check all columns.

    // O(9²) loop over every column / row in the board.
    for (let col=0; col < 9; col++) {
        for (let row=0; row < board.length; row++) {
            curNum = board[row][col]
            
            if (curNum === '.') {
                continue
            } else if (!set.has(curNum)) {
                set.add(curNum)
            } else {
                return false
            }
        }
        
        // Reset the set, check the next column.
        set = new Set()
    }
    
    // Check all squares.
    
    /* O(9²) loop over every row / column in the board.
       Increase row / column by 3 on each iteration, in-order
       to get the origin (top, left) of each each square:
       (0,0),(0,3),(0,6)
       (3,0),(3,3),(3,6)
       (6,0),(6,3),(6,6) */
    for (let top=0; top < 9; top += 3) {
        for (let left=0; left < 9; left += 3) {
            // O(9²) loop over every row / column in the square.
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    curNum = board[top + row][left + col]
                    
                    if (curNum === '.') {
                        continue
                    } else if (!set.has(curNum)) {
                        set.add(curNum)
                    } else {
                        return false;
                    }
                }
            }
            
            // Reset the set, check the next square.
            set = new Set();
        }
    }
    
    // Sudoku is valid.
    return true;
}