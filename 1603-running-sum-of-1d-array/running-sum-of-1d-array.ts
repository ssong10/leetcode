function runningSum(nums: number[]): number[] {
    let sum = 0;
    const arr = new Array(nums.length).fill(0)
    arr[0] = nums[0]

    for (let i = 1;i<nums.length; i++) {
        arr[i] = arr[i - 1] + nums[i]
    }
    return arr
};