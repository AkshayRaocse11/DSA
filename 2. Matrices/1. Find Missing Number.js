/**
 * Finds the smallest positive missing number from an unsorted array.
 * 
 * @param {number[]} arr - The input array containing integers.
 * @returns {number} - The smallest positive missing number.
 * 
 * The function works in the following steps:
 * 
 * 1. **Initialize Variables**:
 *    - `n` holds the length of the array.
 *    - `i` is used as a loop counter to iterate over the array.
 * 
 * 2. **Rearrange Elements**:
 *    - The function uses a while loop to place each element in its correct position if possible.
 *    - For an element `arr[i]` that falls within the range `1` to `n`:
 *      - Calculate its correct index as `correct_i = arr[i] - 1`.
 *      - If the element at `arr[correct_i]` is not the same as `arr[i]`, swap them.
 *      - Otherwise, increment `i` to move to the next element.
 *    - If `arr[i]` is out of range, just increment `i` to ignore it.
 * 
 * 3. **Identify Missing Number**:
 *    - After rearranging, the array should ideally have each number `k` at index `k-1`.
 *    - A for loop checks each index `i`:
 *      - If `arr[i]` is not equal to `i + 1`, then `i + 1` is the missing number.
 *    - If all numbers are correctly placed, then the missing number is `n + 1`.
 * 
 * 4. **Return the Result**:
 *    - The function returns the smallest positive missing number.
 */
function findMissingNumber(arr){
    let n = arr.length;
    let i = 0 ;
    while(i < n){
        if(arr[i] >= 1 && arr[i] <= n){
            let correct_i = arr[i] - 1;
            if (arr[correct_i] !== arr[i]) {
                let temp = arr[correct_i];
                arr[correct_i] = arr[i];
                arr[i] = temp;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    for (let i = 0; i < n; i++) {
        if(arr[i] !== i + 1){
            return i + 1;
        }
    }

    return n + 1;
}

const array = [1, -2, -3, 1, 3, 4, 5];
console.log(findMissingNumber(array)); // Output: 2
