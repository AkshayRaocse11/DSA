/**
 * Function to find the sum of all submatrices in a given 2D matrix.
 * 
 * For each element, it calculates how many submatrices it is a part of, 
 * based on its position in the matrix, and adds its contribution to the total sum.
 * 
 * @param {number[][]} array - The 2D array (matrix) whose submatrices' sum is to be calculated.
 * @returns {number} The sum of all submatrices.
 */
function findSumOfAllSubMatrices(array) {
    let result = 0; // Initialize result to store the sum of all submatrices
    let n = array.length; // Number of rows in the matrix
    let m = array[0].length; // Number of columns in the matrix
    
    // Loop through all the rows
    for (let i = 0; i < n; i++) {
        // Loop through all the columns
        for (let j = 0; j < m; j++) {
            // Calculate the contribution of each element to the total sum.
            // (i + 1) gives the number of rows that can start at or before row `i`
            // (j + 1) gives the number of columns that can start at or before column `j`
            // (n - i) gives the number of rows that can end at or after row `i`
            // (m - j) gives the number of columns that can end at or after column `j`
            result += array[i][j] * (i + 1) * (j + 1) * (n - i) * (m - j);
        }
    }
    
    // Return the total sum of all submatrices
    return result;
}

// Example matrix
const matrix = [
    [1, 2], // First row
    [3, 4]  // Second row
];

// Call the function with the matrix and log the result
console.log(findSumOfAllSubMatrices(matrix)); // Expected output: 40
