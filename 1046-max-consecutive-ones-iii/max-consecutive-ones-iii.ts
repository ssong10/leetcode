function longestOnes(nums: number[], k: number): number {
    let i = 0;
    let j = 0;

    let count = 0;
    let answer = 0;
    while (j < nums.length) {
        if (nums[j]) {
            j ++
        } else {
            if (count < k) {
                count ++
                j ++
            } else {
                count -= nums[i] ? 0 : 1
                i ++
            }
        }
        answer = Math.max(answer, j-i)
    }

    return answer
};