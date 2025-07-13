function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0; // 앞
    let j = 0; // 뒤
    let sum = 0
    let answer = nums.length + 1
    while (j < nums.length) {
        if (sum < target && i !== nums.length) {
            sum += nums[i]
            i ++
        } else {
            if (sum >= target) {
                answer = Math.min(answer, i-j)
            }
            sum -= nums[j]
            j ++
        }
    }

    return answer > nums.length ? 0 : answer
};