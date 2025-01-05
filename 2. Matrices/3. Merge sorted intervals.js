/**
 * Merges a sorted list of overlapping intervals and returns a new list of merged intervals.
 *
 * @param {number[][]} arr - A sorted list of closed intervals, where each interval is represented as [start, end].
 *                           The intervals are sorted based on their start times in ascending order.
 * @returns {number[][]} - A new list of intervals after merging all overlapping intervals.
 *
 * @example
 * // Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
 * // Output: [[1, 6], [8, 10], [15, 18]]
 * mergeSortedIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
 */
function mergeSortedIntervals(arr) {
    // Initialize the start and end of the current interval
    let cur_start = arr[0][0];
    let cur_end = arr[0][1];
    
    // Initialize the result array to store merged intervals
    let result = [];

    // Iterate through the array starting from the second interval
    for (let i = 1; i < arr.length; i++) {
        // Check if the current interval overlaps with the previous one
        if (cur_end >= arr[i][0]) {
            // Update the end of the current interval to the maximum end value
            cur_end = Math.max(cur_end, arr[i][1]);
        } else {
            // If there is no overlap, push the previous interval to the result
            result.push([cur_start, cur_end]);
            // Update the start and end to the current interval
            cur_start = arr[i][0];
            cur_end = arr[i][1];
        }
    }

    // Push the last interval to the result
    result.push([cur_start, cur_end]);

    // Return the merged intervals
    return result;
}

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeSortedIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
