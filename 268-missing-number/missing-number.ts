function missingNumber(nums: number[]): number {
    const newSet = new Set()
    for (let num of nums) {
        newSet.add(num)
    }
    
    for (let i=0;i<nums.length+1;i++) {
        if (!newSet.has(i)) {
            return i
        }
    }
};