/*
    need log n time

    if the first element in the array is larger than the target, the target should be on the latter half of the array
    and we can iterate backwards to find it more quickly

    if the first element is greater and the last element is less than, the target is not within the array
*/

/*
    Time: O(log n)
    Space: O(1)
*/

// my original solution 100 ms 39.4 MB
var search = function(nums, target) {
    let firstElement = nums[0]; // 1
    let lastElement = nums[nums.length - 1]; // 3

    if (nums.length === 1 && firstElement === target) {
        return 0;
    } else if (nums.length === 1) {
        return -1;
    }

    if (firstElement > target && lastElement < target) {
        return -1;
    }

    if (firstElement > target) {
        for (let i = nums.length - 1; i >= 0; i--) {
            let element = nums[i];

            if (element === target) {
                return i
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            let element = nums[i];

            if (element === target) {
                return i
            }
        }
    }

    return -1;
};

// faster solution 76 ms

var search = function(nums, target) {
    let start = 0, end = nums.length - 1;

    while(start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target <= nums[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid;
            } else {
                end = mid;
            }
        }
    }

    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return - 1;
};
