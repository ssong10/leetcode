function maxSubarrayLength(nums: number[], k: number): number {
    const counter = {}
    let a = 0;
    let b = 0;
    let answer = 0;

    while (a < nums.length) {        
        if (counter[nums[a]] >= k) {
            counter[nums[b]] -= 1
            b ++
        } else {
            if (counter[nums[a]]) {
                counter[nums[a]] += 1
            } else {
                counter[nums[a]] = 1
            }
            a++
            answer = Math.max(answer, a - b)
        }
    }

    return answer
};