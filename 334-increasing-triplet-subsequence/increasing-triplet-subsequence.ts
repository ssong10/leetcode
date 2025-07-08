function increasingTriplet(nums: number[]): boolean {
    let first = Infinity
    let second = Infinity

    for (let i=0;i<nums.length;i++) {
        const num = nums[i]
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num;
        } else {
            return true
        }
    }

    return false
};