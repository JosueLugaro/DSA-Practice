// Leet code: Medium

/*
    The array is originally in ascending order, meaning it starts with the lowest number

    Since that is true, we know that we can tell how far the array has rotated based on the index of the lowest number

    The array has rotated at least once

    if the array was not rotated, then the first element would be the min

    ----------------------------------------------------------------------

    start in the middle of the array (where ever that lies, will depend on whether the length is even or not)

    utilize two pointers, one moving towards the beginning of the array, the other moving towards the end

    utilize a min variable and compare each element at each pointer to the min varible
    if the element at whichever pointer is less, than that element is the new min
*/

var findMin = function(nums) {
    let min = Infinity;
    let midPoint;
    let j;

    if (nums.length % 2 === 0) {
        midPoint = nums.length / 2
        j = (nums.length / 2) - 1
    } else {
        min = nums[Math.floor(nums.length / 2)]
        midPoint = Math.floor(nums.length / 2) + 1
        j = Math.floor(nums.length / 2) - 1
    }

    for (let i = midPoint; i < nums.length; i++) {
        let forwardElement = nums[i];
        let reverseElement = nums[j];

        if (forwardElement < min) {
            min = forwardElement;
        }

        if (reverseElement < min) {
            min = reverseElement;
        }

        j--;
    }

    return min;
};
