/**
 * Determines how many jewels exist within a variety of stones.
 * @param {string} jewels // Possible jewel types.
 * @param {string} stones // Could contain jewels.
 * @return {number}
 */
 const numJewelsInStones = (jewels, stones) => {
    // Keeps track of unique stone types.
    const jewelTypes = {}
    // Keeps track of the amount of jewels found within the stones.
    let numJewels = 0
    
    // O(n) loop over every possible jewel type.
    for (let i=0; i < jewels.length; i++) {
        // The jewel character.
        const jewel = jewels.charAt(i)
        
        // Jewel type doesn't exist in dictionary.
        if (!jewelTypes[jewel]) {
            // Save jewel type in dictionary.
            jewelTypes[jewel] = jewel
        }
    }
        
    // O(n) loop over every stone.
    for (let i=0; i < stones.length; i++) {
        // The stone character.
        const stone = stones.charAt(i)
        
        // Stone exists in jewels dictionary.
        if (jewelTypes[stone]) {
            // Jewel found.
            numJewels += 1
        }
    }
    
    // Found all possible jewels within the stones.
    return numJewels
}