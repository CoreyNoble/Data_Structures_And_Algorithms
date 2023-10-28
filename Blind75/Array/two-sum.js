/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const indicies = [];
    const previousValues = {};

    if (!nums || target == null) {
        return indicies;
    }

    for (let i=0; i < nums.length; i++) {
        const value = nums[i];
        const compliment = target - value;

        if (previousValues[compliment] !== undefined) {
            indicies.push(previousValues[compliment], i);
            break;
        }

        previousValues[value] = i;
    }

    return indicies;
};