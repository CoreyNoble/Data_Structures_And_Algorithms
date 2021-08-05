/* These algorithms navigate through a Directed Acyclic Graph and determine if 
 * a path exists between the provided source and destination nodes.
 *
 * Below are two examples: Depth First Search, and Breadth First Search.
 */

// Depth First Search approach.
const hasPathDFS = (graph, current, dst) => {
  /* 'current' can also be referred to as 'source', 
     this algorithm is initialised with a 'source', but as it recurses, the 
     'current' node replaces the 'source'. */

  // A path exists when the current node matches the destination.
  if (current === dst) return true

  // Iterate over each neighbour of the current node.
  for (let neighbour of graph[current]) {
    // Recursively call this method on each neighbour node. If a match is found...
    if (hasPath(graph, neighbour, dst) === true) {
      // bubble up a 'true' response through each call on the call stack.
      return true
    }
  }

  // A path doesn't exist.
  return false
}

// Breadth First Search approach.
const hasPathBFS = (graph, src, dst) => {
  // Initialise a queue data structure, setting 'src' as its' initial value.
  const queue = [ src ]

  // While the queue is still populated.
  while (queue.length) {
    // Take the left-most node off the queue.
    const current = queue.shift()

    // The node matches the destination. A path exists.
    if (current === dst) return true

    // Iterate over every neighbour of the node.
    for (let neighbour of graph[current]) {
      // Add them to the queue.
      queue.push(neighbour)
    }
  }

  // A path doesn't exist.
  return false
}

// A Directed Acyclic Graph, represented as an adjacency list.
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

hasPathDFS(graph, 'f', 'k')
hasPathBFS(graph, 'f', 'k')