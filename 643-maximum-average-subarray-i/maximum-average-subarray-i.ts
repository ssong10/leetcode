function findMaxAverage(nums: number[], k: number): number {
    let base = nums.slice(0, k).reduce((a,b) => a+b, 0)
    let result = base
    for (let i=k;i<nums.length;i++) {
        base = base - nums[i-k] + nums[i]
        result = Math.max(result,base)
    }

    return result/k
};