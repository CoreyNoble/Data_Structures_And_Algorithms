/* Traverses through an undirected graph and determines the number of nodes
 * within the largest set of connected nodes.
 * @param {Object} graph // An undirected graph adjacency list.
 * @returns {int} // The largest number of connected nodes.
 */
const largestComponent = graph => {
  // Keeps track of nodes that have previously been visited.
  const visited = new Set()
  // Keeps track of the largest set of connected nodes.
  let largest = 0

  // Iterate over every node within the graph.
  for (let node in graph) {
    // Explore the connected nodes and return the size.
    const size = exploreSize(graph, node, visited)

    // Update the largest value if the size of the connected nodes is bigger.
    largest = Math.max(size, longest)
  }

  // Explored the entire graph, return the largest number of connected nodes.
  return largest
}

/* Recurses through all nodes that are connected to the current node.
 * Counts the number of connected nodes.
 * @param {Object} graph // An undirected graph adjacency list.
 * @param {Node} current // The node to traverse.
 * @param {Set} visited // A list of all the nodes that have been visited.
 * @returns {int} // the number of nodes connected together
 */
const exploreSize = (graph, current, visited) => {
  // Node has been visited already, don't count it again.
  if (visited.has(current)) return 0
  // Set this node as visited.
  visited.add(current)

  // Initialise the size of the connected set of nodes to 1.
  let size = 1

  // Iterate over every node that is connected to the current node.
  for (let neighbour of graph[current]) {
    // Recursively call this method and increment the size.
    size += exploreSize(graph, neighbour, visited)
  }

  // Recursed though all of the connected nodes. Return the size.
  return size
}

// Adjacency list representing an undirected graph.
const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

largestComponent(graph)