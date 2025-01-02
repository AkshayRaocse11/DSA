/**
 * Function to search for a target value in a row-wise sorted matrix.
 * The matrix is sorted in ascending order both row-wise and column-wise.
 * 
 * @param {number[][]} arr - A square matrix (N x N) where rows and columns are sorted.
 * @param {number} target - The target value to search for in the matrix.
 * @returns {boolean} - Returns `true` if the target exists in the matrix, otherwise `false`.
 */
function rowWiseMatrixSearch(arr, target) {
    let N = arr.length; // The number of rows/columns in the square matrix
    let i = 0;          // Start at the first row
    let j = N - 1;      // Start at the last column

    // Continue searching as long as the indices are within matrix bounds
    while (i < N && j >= 0) {
        if (arr[i][j] === target) {
            // Target found, return true
            return true;
        } else if (arr[i][j] < target) {
            // If the current value is smaller than the target, move down to the next row
            i++;
        } else {
            // If the current value is larger than the target, move left to the previous column
            j--;
        }
    }

    // Target not found, return false
    return false;
}

// Example usage of the rowWiseMatrixSearch function
const rowMatrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];

const target = 10;

console.log(rowWiseMatrixSearch(rowMatrix, target)); // Output: true
