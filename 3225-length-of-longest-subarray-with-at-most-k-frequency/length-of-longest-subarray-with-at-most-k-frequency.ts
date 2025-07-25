function maxSubarrayLength(nums: number[], k: number): number {
    const counter = {}
    let a = 0;
    let b = 0;
    let answer = 0;

    while (a < nums.length) {  
        const i = nums[a]
        const j = nums[b]      
        if (counter[i] >= k) {
            counter[j] -= 1
            b ++
        } else {
            if (counter[i]) {
                counter[i] += 1
            } else {
                counter[i] = 1
            }
            a++
            answer = Math.max(answer, a - b)
        }
    }

    return answer
};