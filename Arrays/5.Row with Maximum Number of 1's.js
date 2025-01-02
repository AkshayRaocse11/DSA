/**
 * Function to find the row index with the maximum number of 1's in a binary matrix.
 * Each row in the matrix is sorted in ascending order (all 0's appear before 1's).
 * 
 * @param {number[][]} arr - A binary matrix where each row is sorted in ascending order.
 * @returns {number} - The index of the row with the maximum number of 1's. 
 *                     Returns -1 if no 1's are present in the matrix.
 */
function rowWithMaxNumberOFones(arr) {
    let answer = -1;               // Initialize answer to -1 (no row with 1's yet)
    let rows = arr.length;         // Total number of rows in the matrix
    let cols = arr[0].length;      // Total number of columns in the matrix
    let i = 0;                     // Start from the first row
    let j = cols - 1;              // Start from the last column of the first row

    // Traverse the matrix from the top-right corner
    while (i < rows && j >= 0) {
        // Move left within the current row as long as the current value is 1
        while (j >= 0 && arr[i][j] === 1) {
            j--;                  // Move to the previous column
            answer = i;           // Update the answer to the current row index
        }
        i++;                      // Move to the next row
    }

    return answer;                 // Return the index of the row with maximum 1's
}

// Example input matrix
const input = [
    [0, 0, 0, 1], // Row 0 has 1 one
    [0, 1, 1, 1], // Row 1 has 3 ones
    [0, 0, 1, 1], // Row 2 has 2 ones
    [1, 1, 1, 1]  // Row 3 has 4 ones (maximum)
];

// Call the function and print the result
console.log(rowWithMaxNumberOFones(input)); // Output: 3
