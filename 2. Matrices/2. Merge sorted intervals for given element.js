function mergeIntervalsAtMiddle(arr,target) {
    let cur_start = target[0];
    let cur_end = target[1];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] < cur_start) {
            result.push(arr[i]);
        } else if (arr[i][0] > cur_end){
            result.push(arr[i]);
            while(i < arr.length-1){
                result.push(arr[i]);
                i++;
            }
        }
        else{
            cur_start = Math.min(cur_start, arr[i][0]);
            cur_end = Math.max(cur_end, arr[i][1]);
        }
        
    }
    result.push([cur_start,cur_end])
    return result;
}

const intervals = [[1, 3], [4, 7], [10, 14], [21, 24],[27,30],[32,35]];
console.log(mergeIntervalsAtMiddle(intervals,[10,22]));