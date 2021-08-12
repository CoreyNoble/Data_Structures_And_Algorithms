/* Finds the number of islands that exist within a grid.
 * @param {array[][]} grid // a 2d array of land/water tiles.
 * @returns {int} // The number of islands found.
 */
const islandCount = grid => {
  // Keeps track of every visited tile within the grid.
  const visited = new Set()
  // Keeps track of each unique island found.
  let count = 0

  // O(n) loop over every row within the grid.
  for (let row=0; row < grid.length; row++) {
    // O(n) loop over every column within the grid
    for (let col=0; col < grid[row].length; col++) {
      // Explore the tile to try and discover a new island.
      if (explore(grid, row, col, count, visited)) {
        // New island found.
        count += 1
      }
    }
  }

  // Explored the entire grid, return the number of islands found.
  return count
}

/* Explores a tile within the 2d grid.
 * Determines if the tile is part of a new island and traverses the island.
 * @param {array[][]} grid // a 2d array of land/water tiles.
 * @param {int} row // The current row we're looking at.
 * @param {int} col // The current column we're looking at.
 * @param {Set} visited // Keeps track of previously visited tiles.
 * @returns {Boolean} // Whether or not we found a new island.
 */
const explore = (grid, row, col, visited) => {
  // Row or column is out of bounds, no new land found.
  const rowInBounds = 0 <= row && row < grid.length
  const colInBounds = 0 <= col && col < grid.length
  if (!rowInBounds || !colInBounds) return false

  // Tile is water, no new land found.
  if (grid[row][col] === 'w') return false

  // Tile has already been explored, no new land found.
  const pos = `${row},${col}`
  if (visited.has(pos)) return false

  /* New land found! */

  // Mark the tile as visited.
  visited.add(pos)

  // Recusively explore the entire island (all land touching this tile).
  explore(grid, row-1, col, visited) // Look up
  explore(grid, row+1, col, visited) // Look down
  explore(grid, row, col-1, visited) // Look left
  explore(grid, row, col+1, visited) // Look right

  // Island explored.
  return true
}

// A 2d array representing a grid of land (L) and water (W) tiles.
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

islandCount(grid)