/**
 * Determines the center node within a star graph.
 * @param {number[][]} edges
 * @return {number}
 */
 const findCenter = edges => {
    // Edge case: There can't be a center node.
    if (!edges || edges.length < 2) return 0
    
    // Saves the node that re-occurs on every edge.
    let consistentNode = 0;
    
    // Find the node that exists on the both the first and second edge.
    if (edges[0][0] === edges[1][0] ||
        edges[0][0] === edges[1][1]
    ) {
        consistentNode = edges[0][0]
    } else if (edges[0][1] === edges[1][0] ||
               edges[0][1] === edges[1][1]
    ) {
        consistentNode = edges[0][1]
    }
    
    // Found a consisent node
    if (consistentNode) {
        // O(n) loop to iterate over every edge.
        for (let edge of edges) {
            // If the consistent node doesn't exist on the edge.
            if (edge[0] !== consistentNode &&
                edge[1] !== consistentNode
            ) {
                // No consistent node exists, exit the loop
                consistentNode = 0
                break
            }
        }
    }
    
    // Return the consistent node if it exists, otherwise return 0.
    return consistentNode
}