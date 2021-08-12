/* Finds the number of islands that exist within a grid.
 * @param {array[][]} grid // a 2d array of land/water tiles.
 * @returns {int} // The minimum size island within the grid.
 */
const minimumIsland = grid => {
  // Keeps track of every visited tile within the grid.
  const visited = new Set()
  /* Keeps track of the size of the smallest island found.
     Initialise to Infinity to ensure all found islands are smaller */
  let minSize = Infinity

  // O(n) loop over every row within the grid.
  for (let row=0; row < graph.size; row++) {
      // O(n) loop over every column within the grid
    for (let col=0; col < graph[row].size; col++) {
      // Find the size of the island present at the given tile.
      const size = exploreSize(grid, row, col, visited)

      // Size greater than 0 if a new island is found and traversed.
      // Size less than minSize means we found a new smaller island.
      if (size > 0 && size < minSize) {
        // Set the new smallest size.
        minSize = size
      }
    }
  }

  // Traversed the entire grid. Return the size of the smallest island.
  return minSize
}

/* Explores a tile within the 2d grid.
 * If the tile is part of a new island, explore the island and return its size.
 * @param {array[][]} grid // a 2d array of land/water tiles.
 * @param {int} row // The current row we're looking at.
 * @param {int} col // The current column we're looking at.
 * @param {Set} visited // Keeps track of previously visited tiles.
 * @returns {int} // The size of the island
 */
const exploreSize = (grid, row, col, visited) => {
  // Row or column is out of bounds, no new land found.
  const rowInBounds = 0 <= row && row < grid.length
  const colInBounds = 0 <= col && col < grid.length
  if (!rowInBounds || !colInBounds) return 0

  // Tile is water, no new land found.
  if (grid[row][col] === 'W') return 0

  // Tile has already been explored, no new land found.
  const pos = `${row},${col}`
  if (visited.has(pos)) return 0

  /* New land found! */

  // Mark the tile as visited.
  visited.add(pos)

  // Initialise the size of the island to 1.
  let size = 1

  // Explore the adjacent tiles of the island and increment the island size
  size += exploreSize(grid, row-1, col, visited) // Look up
  size += exploreSize(grid, row+1, col, visited) // Look down
  size += exploreSize(grid, row, col-1, visited) // Look left
  size += exploreSize(grid, row, col+1, visited) // Look right

  // Island explored. Return its size.
  return size
}

// A 2d array representing a grid of land (L) and water (W) tiles.
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

minimumIsland(grid)