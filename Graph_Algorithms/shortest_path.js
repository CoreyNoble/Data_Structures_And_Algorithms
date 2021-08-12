/* 
 * Find the shortest path in a graph using Breadth First Search.
 * @param {array} edges // A list of undirected connections between nodes.
 * @param {Node} src // The node we begin traversing from.
 * @param {Node} dst // The node we try traversing to.
 */
const shortestPath = (edges, src, dst) => {
  // Convert edges into an adjacency list.
  const graph = buildGraph(edges)
  // Keeps track of nodes that have previously been visited.
  const visited = new Set([ src ])
  /* Initialise a queue data structure, 
     setting 'src' as its' initial value. 0 as its distance. */
  const queue = [[ src, 0 ]]

  // Iterate while the queue is still populated.
  while(queue.length) {
    // Extract the current node, and its distance from the queue.
    const [ node, distance ] = queue.shift()

    // Node matches destination. Return the distance.
    if (node === dst) return distance

    // Iterate over every neighbour of the node.
    for (let neighbour of graph[node]) {
      // Only if the neighbour has not yet been visited.
      if (!visited.has(neighbour)) {
        // Set the neighbour as visited.
        visited.add(neighbour)
        // Add the neighbour to the queue and increment its distance.
        queue.push([ neighbour, distance + 1 ])
      }
    }
  }

  // There is no shortest path.
  return -1
}

/* Converts an undirected edges list into an adjacency list.
 * For example:
 * [ ['w', 'x']   becomes: { w: ['x', 'v'],
 *   ['x', 'y']              x: ['w', 'y'],
 *   ['z', 'y']              y: ['x', 'z'],
 *   ['z', 'v']              z: ['y', 'v'],
 *   ['w', 'v'] ]            v: ['z', 'w'] }
 * @param {array} edges // A list of undirected connections between nodes.
 * @returns {object} graph // An adjacency list representation of the graph.
 */
const buildGraph = edges => {
  const graph = {}

  for (let edge of edges) {
    const [ a, b ] = edge

    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

/* Edge list for an undirected graph.
   Every pair represents a connection between two nodes in both directions */
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

shortestPath(edges, 'w', 'z')