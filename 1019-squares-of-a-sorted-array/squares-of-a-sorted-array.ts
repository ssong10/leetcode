function sortedSquares(nums: number[]): number[] {
    const result = new Array(nums.length).fill(0);

    const size = nums.length
    let i = 0;
    let j = 0

    while (i + j < size) {
        if (nums[i] ** 2 > nums[size-1-j] ** 2) {
            result[size-1-i-j] = nums[i] ** 2
            i++
        } else {
            result[size-1-i-j] = nums[size-1-j] ** 2
            j ++
        }
    }
    return result
};