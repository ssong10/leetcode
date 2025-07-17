function minStartValue(nums: number[]): number {
    let cur = 0
    let result = 1
    for (let i=0;i<nums.length; i++) {
        cur += nums[i]
        if (cur < 0) {
            result = Math.max(result, -cur + 1)
        }
    }
    return result
};