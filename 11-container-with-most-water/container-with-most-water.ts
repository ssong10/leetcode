function maxArea(height: number[]): number {
    let start = 0
    let end = height.length -1;

    let answer = 0;
    while (start <= end) {
        const tmp = Math.min(height[start], height[end])

        answer = Math.max(answer, tmp * (end-start))
        if (tmp === height[start]) {
            start ++
        } else {
            end --
        }
    }
    return answer
};