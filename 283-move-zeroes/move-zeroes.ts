/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    for (let i =0; i<nums.length; i++) {
        if (nums[i] === 0) {
            for (let j=i;j<nums.length;j++) {
                if (nums[j] !== 0) {
                    const tmp = nums[j]
                    nums[j] = nums[i]
                    nums[i] = tmp
                    break
                }
            }
        }
    }
};
