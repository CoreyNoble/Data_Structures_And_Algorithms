/**
 * Determines the number of iterations it takes for rot to spread through a grid.
 * It takes one iteration for a rotten orange to infect an adjacent fresh orange.
 * The rot spreads in 4 directions at once: left, down, right and up.
 * Rotten orange = 2, Fresh orange = 1, Empty space = 0.
 *
 * For example: [[2, 1, 1]  = 4   [[2, 1, 1]  = -1 // Cannot spread the rot to 3,3
 *               [1, 1, 0]         [1, 1, 0]
 *               [0, 1, 1]]        [0, 0, 1]]
 *
 *              // Spread in the first example occurs as follows:
 *              // Step 1: 0,0 -> 0,1 and 1,0
 *              // Step 2: 1,0 and 0,1 -> 1,1
 *              // Step 2: 0,1 -> 0,2
 *              // Step 3: 1,1 -> 2,1
 *              // Step 4: 2,1 -> 2,3
 *
 * @param {number[][]} grid // A 2d array of tiles.
 * @return {number} // The number of iterations it takes to infect the board.
 */
const orangesRotting = grid => {
    // Two sets to keep track of the cells containing fresh and rotten tomatoes.
    const freshOranges = new Set()
    let rottenOranges = new Set()

    // O(n) Loop over every item within the grid.
    for (let row=0; row < grid.length; row++) {
        for (let col=0; col < grid[row].length; col++) {
            // Tile is a fresh orange.
            if (grid[row][col] === 1) {
                // Save the location of the fresh orange
                freshOranges.add(`${row},${col}`)
            // Tile is a rotten orange.
            } else if (grid[row][col] === 2) {
                // Save the location of the rotten orange.
                rottenOranges.add(`${row},${col}`) 
            }
        }
    }

    // Keeps track of how many iterations occur to rot the entire grid.
    let iterations = 0
    // Directions for moving right, down, left, up.
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]

    /* Using a Breadth First Search (BFS) approach to propogate rot. Remove 
       fresh oranges from the fresh set as they become rotten, effectively 
       turning the freshOranges set into the queue used in our BFS */
    
    // While fresh oranges remain.
    while(freshOranges.size) {
        // Keeps track of newly infected oranges.
        const infectedOranges = new Set()

        // Iterate over every rotten orange.
        for (let rottenOrange of rottenOranges) {
            // Get the grid position for the rotten orange.
            const row = parseInt(rottenOrange.split(',')[0])
            const col = parseInt(rottenOrange.split(',')[1])

            // For every possible move direction
            for (let direction of directions) {
                // Determine the next position the rot will spread to.
                const nextRow = row + direction[0]
                const nextCol = col + direction[1]

                // If a fresh orange exists in the position the rot spreads to.
                if (freshOranges.has(`${nextRow},${nextCol}`)) {
                    // Remove the fresh orange from the freshOrange set.
                    freshOranges.delete(`${nextRow},${nextCol}`)
                    // Infect the fresh orange.
                    infectedOranges.add(`${nextRow},${nextCol}`)
                }
            }            
        }
        
        // No oranges were infected, but fresh oranges remain.
        if (infectedOranges.size === 0) {
            // Could not spread rot to all fresh oranges.
            return -1
        }
        
        /* Spread for current rotten oranges is complete. 
           Set the rottenOranges set equal to the newly infected oranges,
           to continue the spread. */
        rottenOranges = infectedOranges
        
        // A spread cycle is complete, increment the count.
        iterations += 1
    }

    // Return the amount of iterations it took to complete the spread.
    return iterations
}