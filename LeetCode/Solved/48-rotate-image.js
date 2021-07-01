/**
 * Rotate a 2d NxN array (matrix) clockwise
 * eg. [[1, 2, 3] becomes [[7, 4, 1]
 *      [4, 5, 6]          [8, 5, 2] 
 *      [7, 8, 9]]         [9, 6, 3]]
 * @param {number[][]} matrix // The matrix needs to be identical in height and width
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  // the height/width of the matrix
  const N = matrix.length;
  
  // Step 1:
  /* transposes the matrix (turns rows into columns)
     eg. [[1, 2, 3] becomes [[1, 4, 7]
          [4, 5, 6]          [2, 5, 8] 
          [7, 8, 9]]         [3, 6, 9]] */

  // iterate over each row
  for (let row=0; row<N; row++) {
      // iterate over each column
      /* col=row to ensure we move towards the bottom-right as we loop
         We do this because while swapping col with row, we have already dealt 
         with that index on both the x and y axis
         eg. [(1), 2, 3] THEN  [1,  4 , 7]   THEN [1, 4,  7 ]
             [ 4 , 5, 6]       [2, (5), 6]        [2, 5,  8 ]
             [ 7 , 8, 9]       [3,  8 , 9]        [3, 6, (9)]*/
      for (let col=row; col<N; col++) {
          // temporarily save the row/column value before overwriting it (swapping)
          const temp = matrix[row][col];
          
          // row value becomes the column value
          matrix[row][col] = matrix[col][row];
          // column value becomes the row value
          matrix[col][row] = temp;
      }
  }
  
  // Step 2:
  /* flips the values in each row (eg. opposite indicies swap)
     eg. [[1, 4, 7] becomes [[7, 4, 1]
          [2, 5, 8]          [8, 5, 2] 
          [3, 6, 9]]         [9. 6, 3]] */

  // iterate over each row
  for (let row=0; row<N; row++) {
      // iterate over each column
      // col<(N/2) because we're walking from each end of the array towards the middle
      for (let col=0; col<(N/2); col++) {
          // temporarily save the first value before overwriting it (swapping)
          const temp = matrix[row][col];
          
          // first value becomes last value
          matrix[row][col] = matrix[row][N-1-col];
          // last value becomes first value
          matrix[row][N-1-col] = temp;
      }
  }
};