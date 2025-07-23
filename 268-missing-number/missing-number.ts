function missingNumber(nums: number[]): number {
    const newSet = new Set(Array(nums.length + 1).fill(0).map((_,i) => i))
    for (let num of nums) {
        newSet.delete(num)
    }
    return newSet.keys().next().value
};