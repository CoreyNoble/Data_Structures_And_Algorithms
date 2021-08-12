
/* Builds and adjacency list from a list of undirected edges. 
 * Determines if a path exists between source and destination nodes.
 * @param {array} edges // list of undirected edges in a graph.
 * @param {Node} src // The node we begin traversing from.
 * @param {Node} dst // The node we try traversing to.
 * @returns {boolean}
 */
const undirectedPath = (edges, src, dst) => {
  // Convert edges into an adjacency list.
  const graph = buildGraph(edges)

  // Determine if a path exists.
  return hasPath(graph, src, dst, new Set())
}

/* Recursively determines if a path exists between a source and destination node.
 * @param {Object} graph // The node adjacency list.
 * @param {Node} curr // The current node during the recursion.
 * @param {Node} dst // The destination node we're looking for.
 * @param {Set} visited // Keeps track of the nodes that have been traversed.
 * @returns {boolean}
 */
const hasPath = (graph, curr, dst, visited) => {
  // Current node matches destination. A path exists.
  if (curr === dst) return true
  // Current node has already been visited, don't visit it again.
  if (visited.has(curr)) return false

  // Mark current node as visited.
  visited.add(curr)

  // Iterate over all of the current nodes' connected nodes.
  for (let neighbour of graph[curr]) {
    /* Recursively call this method, using each neighbour node as 'current'.
       If a match is found... */
    if (hasPath(graph, neighbour, dst, visited) === true) {
      // Bubble up a 'true' response through each call on the call stack.
      return true
    }
  }

  // Recursed through every edge combination. A path doesn't exist.
  return false
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
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

undirectedPath(edges, 'j', 'm')