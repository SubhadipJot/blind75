function twoSum(nums, target) {

    if(nums.length === 0) return;

    if(nums.length === 1) return;

    if(nums.length === 2 && nums[0]+nums[1] === target) {
        return [nums[0], nums[1]];
    }

    if(nums.length === 2 && nums[0]+nums[1] !== target) {
        return;
    }

    let indexMap = new Map();

    for (let index = 0; index < nums.length; index++) {
        let difference = target - nums[index];
        if(indexMap.has(difference)) {
            return [indexMap.get(difference), index];
        } else {
            indexMap.set(nums[index], index);
        }
    }

    console.log(indexMap)

    
}

console.log(twoSum([1,2,5,4,7], 9));