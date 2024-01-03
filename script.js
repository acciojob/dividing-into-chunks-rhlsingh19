const arr = [1, 2, 3, 4, 1, 0, 2, 2];

function divide(arr, n) {
    const subarrays = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (const num of arr) {
        // If adding the current number exceeds the limit, start a new subarray
        if (currentSum + num > n) {
            subarrays.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }

        currentSubarray.push(num);
        currentSum += num;
    }

    // Add the last subarray
    if (currentSubarray.length > 0) {
        subarrays.push(currentSubarray);
    }

    return subarrays;
}


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
