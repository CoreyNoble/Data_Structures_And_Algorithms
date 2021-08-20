/**
 * Finds the maximum area of water that can be contained betwen any pair of elevations.
 * @param {number[]} // The different height elevations.
 * @return {number}  // The maximum area of water that can be contained.
 */
const maxArea = height => {
    // Keeps track of the maximum area of water contained.
    let maxWater = 0
    // Starts from the left and moves right through the list of elevations.
    let leftPointer = 0
    // Starts from the right and moves left through the list of elevations.
    let rightPointer = height.length - 1
    
    // Pointers have not yet collided
    while (leftPointer < rightPointer) {
        // Find the minimum elevation between the two pointers.
        const minHeight = Math.min(height[leftPointer], height[rightPointer])
        // Calculate the area of water stored between the two pointers.
        const area = minHeight * (rightPointer - leftPointer)
        
        // set maxWater to the bggest number between itself and the new area.
        maxWater = Math.max(maxWater, area)
        
        // Left pointer is the smaller height, or equal height.
        if (height[leftPointer] <= height[rightPointer]) {
            // Move the left pointer down.
            leftPointer += 1
        // Right pointer is the smaller height.
        } else {
            // Move the right pointer up.
            rightPointer -= 1
        }
    }
    
    // Return the maximum area of water found.
    return maxWater
}