/**
 * Unsets the rightmost B bits of a given integer A.
 *
 * @param {number} A - The integer whose bits are to be modified.
 * @param {number} B - The number of bits to unset from the right.
 * @returns {number} - The resulting integer after unsetting the rightmost B bits of A.
 *
 * @example
 * // Input: A = 5 (binary 101), B = 1
 * // Output: 4 (binary 100), as the rightmost bit is unset
 * console.log(unSetXbitsFromRight(5, 1)); // Output: 4
 */
function unSetXbitsFromRight(A, B) {
    // Create a mask with the rightmost B bits set to 0 and the rest to 1
    let mask = BigInt(~0) << BigInt(B);
    // Apply the mask to A using the bitwise AND operator to unset the rightmost B bits
    return A & mask;
}

// Example usage
console.log(unSetXbitsFromRight(5, 1)); // Output: 4
