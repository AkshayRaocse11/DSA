/**
 * Function to calculate the total amount of rainwater trapped between buildings.
 * 
 * The algorithm uses two auxiliary arrays (`leftMax` and `rightMax`) to store the 
 * maximum height of buildings to the left and right of each building, respectively. 
 * Then, for each building, the amount of water it can trap is determined by the 
 * minimum of the left and right maximum heights minus the height of the building.
 * 
 * @param {number[]} arr - An array of integers representing the heights of the buildings.
 * @returns {number} - The total amount of water trapped between the buildings.
 */
function calculateRainWaterTrappedInBuildings(arr) {
    // Initialize leftMax and rightMax arrays to store the maximum heights to the left and right of each building
    const leftMax = new Array(arr.length).fill(0);
    const rightMax = new Array(arr.length).fill(0);

    // Set the first element of leftMax to the height of the first building
    leftMax[0] = arr[0];

    // Set the last element of rightMax to the height of the last building
    rightMax[arr.length - 1] = arr[arr.length - 1];

    // Fill the leftMax array with the maximum height encountered from the left side
    for (let index = 1; index < arr.length; index++) {
        leftMax[index] = Math.max(leftMax[index - 1], arr[index]);
    }

    // Fill the rightMax array with the maximum height encountered from the right side
    for (let index = arr.length - 2; index >= 0; index--) {
        rightMax[index] = Math.max(rightMax[index + 1], arr[index]);
    }

    let answer = 0;

    // Calculate the amount of water trapped at each building
    for (let index = 0; index < arr.length; index++) {
        // The water trapped at a building is the difference between the minimum of leftMax and rightMax at that building
        // and the height of the building itself
        const waterPerBuilding = Math.min(leftMax[index], rightMax[index]) - arr[index];
        
        // Add the water trapped at the building to the total answer
        answer += waterPerBuilding;
    }

    return answer; // Return the total amount of trapped water
}

// Example usage:
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(calculateRainWaterTrappedInBuildings(height)); // Output: 6
