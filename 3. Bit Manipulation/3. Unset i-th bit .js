/**
 * Toggles the bit at the specified position in a number.
 * 
 * @param {number} A - The integer whose bit at position B will be toggled.
 * @param {number} B - The position of the bit to toggle (0-indexed from the right).
 * 
 * @returns {number} - The integer after toggling the bit at position B.
 * 
 * @description
 * This function checks whether the bit at position B in A is set to 1 or 0.
 * If the bit is 1, it toggles it to 0. If it's 0, it toggles it to 1.
 */
function toggleBitAtPosition(A, B) {
    // Create a mask by shifting 1 to the left by B positions
    let mask = 1 << B;
    
    // Check if the bit at position B is 1
    if ((A & mask) !== 0) {
        // If the bit is 1, toggle it to 0 by XORing with the mask
        return A ^ mask;
    } else {
        // If the bit is 0, return the original number
        return A;
    }
}

/**
 * Example calls:
 */
console.log(toggleBitAtPosition(5, 1));  // Output: 7 (Binary: 101 -> 111)
console.log(toggleBitAtPosition(5, 2));  // Output: 1 (Binary: 101 -> 001)
