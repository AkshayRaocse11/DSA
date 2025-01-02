/**
 * Function to print the elements of a matrix in a spiral order.
 * 
 * This function traverses the given 2D array in a spiral fashion, starting from the top-left corner, 
 * moving right along the top row, down the rightmost column, left along the bottom row, and up the leftmost column.
 * It repeats this pattern until all elements of the matrix are processed.
 * 
 * @param {number[][]} arr - The 2D array (matrix) to be traversed in a spiral order.
 * @returns {number[]} An array containing the elements in spiral order.
 */
function printSpiralMatrix(arr) {
    let result = []; // Array to store the elements in spiral order
    let i = 0;       // Row index to track the current row
    let j = 0;       // Column index to track the current column
    let N = arr.length; // Dimension of the matrix (rows and columns)

    // Outer loop for spiral traversal
    while (N > 1) {
        // Traverse the top row from left to right
        for (let k = 1; k < N; k++) {
            const element = arr[i][j];  // Get the element at the current position
            result.push(element);       // Add the element to the result array
            j++;                        // Move right
        }

        // Traverse the right column from top to bottom
        for (let k = 1; k < N; k++) {
            const element = arr[i][j];  // Get the element at the current position
            result.push(element);       // Add the element to the result array
            i++;                        // Move down
        }

        // Traverse the bottom row from right to left
        for (let k = 1; k < N; k++) {
            const element = arr[i][j];  // Get the element at the current position
            result.push(element);       // Add the element to the result array
            j--;                        // Move left
        }

        // Traverse the left column from bottom to top
        for (let k = 1; k < N; k++) {
            const element = arr[i][j];  // Get the element at the current position
            result.push(element);       // Add the element to the result array
            i--;                        // Move up
        }

        // Move the boundaries inward for the next loop
        i++; // Move to the next row inside the current boundary
        j++; // Move to the next column inside the current boundary
        N = N - 2; // Reduce the dimension of the current spiral (narrow the boundaries)
    }

    // If there's one element remaining in the center (in case of odd dimension matrix)
    if (N == 1) {
        result.push(arr[i][j]); // Add the last center element to the result
    }

    return result; // Return the elements in spiral order
}

// Example matrix
const matrix = [
    [1, 2, 3, 4],  // First row
    [5, 6, 7, 8],  // Second row
    [9, 10, 11, 12], // Third row
    [9, 10, 11, 12]  // Fourth row
];

// Call the function with the matrix and log the result
console.log(printSpiralMatrix(matrix)); // Expected output: [1, 2, 3, 4, 8, 12, 12, 11, 10, 9, 9, 5, 6, 7]
