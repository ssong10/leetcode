function pivotIndex(nums: number[]): number {
    const total = nums.reduce((a,b) => a+b,0)
    let sum = 0;
    for (let i = 0;i<nums.length; i++) {
        if (sum === (total - nums[i]) / 2) {
            return i
        }
        sum += nums[i]
    }
    return -1
};