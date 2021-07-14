/**
 * Determines if a number is a perfect square
 * @param {number} num
 * @return {boolean}
 */
 const isPerfectSquare = num => {
    // Edge case: 0, 1, 2 are square numbers.
    if (num <= 2) return true

    let isSquare = false
    let sq = Math.floor(num / 2)
    
    /* Finds the minimum value to calculate 'sq' from 
     * @return {void} 
     */
    const findMin = () => {
        if (sq*sq > num) {
            sq = Math.floor(sq / 2)
            findMin()
        }
    }
    
    findMin()
    
    // Iterate while 'sq*sq' is less than / equal to 'num'.
    while (sq*sq <= num) {
        if (sq*sq === num) {
            // 'sq' is a square of 'num'.
            isSquare = true
            break
        } else if (sq*sq < num) {
            // 'sq' is not a square of 'num'. Increment 'sq' and iterate.
            sq++   
        }
    }
    
    return isSquare
}