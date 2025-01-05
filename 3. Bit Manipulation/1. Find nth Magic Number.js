/**
 * Finds the nth magic number, which is defined as the sum of unique powers of 5.
 *
 * @param {number} A - The position of the magic number to find.
 * @returns {number} - The nth magic number.
 *
 * @example
 * // Input: A = 3
 * // Output: 30, as the 3rd magic number is 5^1 + 5^2 = 5 + 25 = 30
 * console.log(FindnthMagicNumber(3)); // Output: 30
 */
function FindnthMagicNumber(A) {
    // Initialize mask to A, count to track the power of 5, and sum to store the result
    let mask = A;
    let count = 1;
    let sum = 0;

    // Loop until the mask is greater than 0
    while (mask > 0) {
        // If the least significant bit of mask is 1, add the corresponding power of 5 to the sum
        if ((mask & 1) == 1) {
            sum += Math.pow(5, count);
        }
        // Increment the count to move to the next power of 5
        count++;
        // Right shift the mask by 1 to process the next bit
        mask = mask >> 1;
    }

    // Return the calculated magic number
    return sum;
}

// Example usage
console.log(FindnthMagicNumber(3)); // Output: 30
