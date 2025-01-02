/**
 * Function to find the maximum sum of a contiguous subarray using Kadane's algorithm.
 * 
 * This function calculates the maximum sum of any contiguous subarray in the input array.
 * The algorithm works by maintaining a running sum of the current subarray and updating 
 * the maximum sum whenever the current subarray sum exceeds the previous maximum.
 * If the current sum becomes negative, it is reset to 0, since a negative sum cannot 
 * contribute positively to any future subarray sums.
 * 
 * @param {number[]} arr - The array for which to find the maximum sum of a contiguous subarray.
 * @returns {number} - The maximum sum of any contiguous subarray in the input array.
 */
function findMaxSubArray(arr) {
    let sum = 0; // Tracks the running sum of the current subarray
    let answer = -Infinity; // Stores the maximum subarray sum found so far

    // Iterate over each item in the array to calculate the sum of the subarrays
    for (const item of arr) {
        sum = sum + item; // Add the current item to the running sum
        answer = Math.max(sum, answer); // Update the maximum sum if the current sum is greater
        if (sum < 0) {
            sum = 0; // Reset the sum if it becomes negative, as it won't help in finding the max
        }
    }
    return answer; // Return the maximum sum
}

/**
 * Function to find the actual subarray that produces the maximum sum.
 * 
 * This function identifies and returns the contiguous subarray that produces the maximum sum.
 * It works similarly to `findMaxSubArray`, but it also tracks the start and end indices of
 * the subarray with the maximum sum to extract and return it.
 * 
 * @param {number[]} arr - The array for which to find the subarray with the maximum sum.
 * @returns {number[]} - The subarray with the maximum sum.
 */
function returnMaxSubArray(arr) {
    let sum = 0; // Tracks the running sum of the current subarray
    let answer = -Infinity; // Stores the maximum subarray sum found so far
    let tempStartIndex = 0; // Temporary start index of the current subarray
    let startIndex = 0; // Start index of the maximum subarray
    let endIndex = 0; // End index (exclusive) of the maximum subarray

    // Iterate over each element in the array to calculate the sum of subarrays
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element; // Add the current element to the running sum

        // Update the maximum sum and the corresponding subarray indices
        if (sum > answer) {
            answer = sum; // Update the maximum sum
            startIndex = tempStartIndex; // Update the start index of the maximum subarray
            endIndex = index + 1; // Update the end index (exclusive) of the maximum subarray
        }

        // If the running sum becomes negative, reset the sum and potential start index
        if (sum < 0) {
            sum = 0; // Reset the running sum if it becomes negative
            tempStartIndex = index + 1; // Update the potential start of the next subarray
        }
    }

    // Return the subarray that corresponds to the maximum sum
    return arr.slice(startIndex, endIndex);
}

// Example usage:
const array = [-2, 3, 4, -1, 5, -10, 7];

// Find the maximum sum of a contiguous subarray
const result = findMaxSubArray(array);
console.log(result); // Output: 11

// Find the actual subarray with the maximum sum
const maxSubArray = returnMaxSubArray(array);
console.log(maxSubArray); // Output: [3, 4, -1, 5]
