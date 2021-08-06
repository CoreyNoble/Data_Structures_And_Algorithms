/* Counts the number of connected components in an undirected graph. 
 * For example: [[1 - 2 - 3], [4 - 5]] = 2
 * @param {Object} graph // An undirected graph adjacency list.
 * @returns {int} // The number of connected components.
 */
const connectedComponentsCount = graph => {
  // Keeps track of nodes that have previously been visited.
  const visited = new Set()
  // Counts the number of connected components
  let count = 0

  // Iterate over every node within the graph.
  for (let node in graph) {
    /* explore the graph at the current node.
       This method returns true if the node has not yet been visited. If so... */
    if (explore(graph, node, visited) === true) {
      // Increase the number of connected components counter.
      count += 1
    }
  }

  // All nodes have been explored, return the count.
  return count
}

/* Explores the connected components of a node
 * @param {Object} graph // An undirected graph adjacency list.
 * @param {Node} current // The node we're exploring.
 * @param {Set} visited // A list of all the nodes that have been visited.
 */
const expolore = (graph, current, visited) => {
  // Node has already been visited, Skip exploration of this node.
  if (visited.has(String(current))) return false

  // Set this node as visited.
  visited.add(String(current))

  // Iterate over each connected node to the current node.
  for (let neighbour of graph[current]) {
    // Recurisvely call this method to explore the connected nodes.
    explore(graph, neighbour, visited)
  }

  // have explored this node as far as possible
  return true
}

// Adjacency list representing an undirected graph.
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

connectedComponentsCount(graph)