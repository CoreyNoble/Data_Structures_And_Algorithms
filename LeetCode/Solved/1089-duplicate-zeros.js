/**
 * Duplicates 0s in a fixed size array.
 * When a 0 is duplicated, shift all next entries to the right.
 * Maintain the original length of the array.
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 const duplicateZeros = arr => {
    // O(n) loop over every item within the array.
    for (let i=0; i < arr.length; i++) {
        // Value is 0.
        if (arr[i] === 0) {
            // Add a new 0 to the right of current 0.
            arr.splice(i, 0, 0)
            // Remove last item from the array.
            arr.pop()
            // Increase iteration so it skips the new next 0.
            i = i + 1
        }
    }
};