function combinationSum3(k: number, n: number): number[][] {
    const result = []

    const ans = [] 
    function backtracking(cur: number[], i: number, sum: number) {
        if (i > 10 || sum > n) {
            return
        }
        if (cur.length === k) {
            if (sum === n) {
                result.push(cur)
            }
            return
        }
        for (let next = i; next < 10; next++) {
            cur.push(next)
            backtracking([...cur], next + 1, sum + next)
            cur.pop()
        }
    }
    backtracking([], 1, 0)
    return result
};