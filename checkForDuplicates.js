function checkForDuplicates(nums) {

    if(nums === null || nums === undefined || nums.length === 0 || nums.length === 1) {
        return 'input not sufficient';
    }

    if(Array.isArray(nums) && nums.length > 1) {
    let numSet = new Set();

    for (let index = 0; index < nums.length; index++) {
        if(numSet.has(nums[index])) {
            return true;
        } else {
            numSet.add(nums[index]);
        }
        }
    }
    return false;
}

console.log(checkForDuplicates([1,2,4,1]))