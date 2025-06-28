function findPeakElement(nums: number[]): number {
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return i
        }
    }
    return nums.length - 1
};