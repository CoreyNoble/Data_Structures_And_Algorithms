/* Depth First Search (DFS)
   - Implements a Stack data structure (Last in, First Out).
   -- => 'c'  Always take from the top '.pop()'
         'b'  Always add to the top '.push()'
         'a'
         ===
   - Can be implemented either iteratively or recursively. */

// DFS Iterative approach
const depthFirstIterativePrint = (graph, source) => {
  // Initialise the stack with the source node.
  const stack = [ source ]

  // Iterate while stack is still populated.
  while (stack.length) {
    // .pop() the top item off the stack.
    const current = stack.pop()
    console.log(current)

    // Iterate over each node adjacent to the current node.
    for (let neighbour of graph[current]) {
      // .push() the adjacent node to the top of the stack.
      stack.push(neighbour)
    }
  }
}

// DFS Recursive approach
const depthFirstRecursivePrint = (graph, currentNode) => {
  /* No explicit base case,.
     the implicit base case is when the recursed node has no neighbours. */

  // currentNode is the top node on the call stack.
  console.log(currentNode)

  // Iterate over each node adjacent to the current node.
  for (let neighbour of graph[currentNode]) {
    // Recursively call this method for each adjacent node.
    depthFirstRecursivePrint(graph, neighbour)
  }
}



/* Breadth First Search (BFS)
   - Implements a Queue data structure (First In, First Out).
   -- => ['a', 'b', 'c']

   --- Add to the right: ['a', 'b', 'c'] <= 'd'
   -- => ['a', 'b', 'c', 'd']

   --- Take from the left: 'a' <= ['b', 'c', 'd']
   -- => ['b', 'c', 'd']

   - Can only be implemented iteratively. */

// BFS approach
const breadthFirstPrint = (graph, source) => {
  const queue = [ source ]

  // Iterate while the queue is still populated.
  while (queue.length) {
    // .shift() the front node out of the queue.
    const current = queue.shift()
    console.log(current)

    // Iterate over each node adjacent to the current node.
    for (let neighbour of graph[current]) {
      // .push() the adjacent node to the end of the queue.
      queue.push(neighbour)
    }
  }
}

// A directed acyclic graph, represented as an adjacency list.
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstIterativePrint(graph, 'a')
depthFirstRecursivePrint(graph, 'a')

breadthFirstPrint(graph, 'a')