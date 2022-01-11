/*
    we want the subarray that sums to the largest value possible

    could be the entire array, or a subarray

    the subarray has to be contiguous

    loop and create different subarrays as we loop

    then compare the sums of those subarrays, all the way through eventually we'll get the max

    while loop
        create sub arrays until we cant create a unique one of same length
        then increment the number and do it over

    ONE: remember sub arrays
    TWO: let the bat do the work
*/

// My first attempt:
var maxSubArray = function(nums) {
    let max = -Infinity;
    let subArrLength = 1;
    let subArr = []

    for (let i = 0; i < subArrLength; i++) {
        let element = nums[i];
    }

};
