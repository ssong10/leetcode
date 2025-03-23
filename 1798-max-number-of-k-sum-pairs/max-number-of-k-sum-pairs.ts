function maxOperations(nums: number[], k: number): number {
    const sorted = nums.sort((a,b) => a-b)

    let start = 0;
    let end = nums.length-1;
    
    let answer = 0;
    while (start < end) {
        const sum = sorted[start] + sorted[end]
        if (sum === k) {
            answer ++
            start ++
            end --
        } else {
            if (sum > k) {
                end --
            } else {
                start ++
            }
        }
    }
    return answer
};