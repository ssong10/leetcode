function totalNQueens(n: number): number {
    const map = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    let answer = 0;
    const set = new Set();

    const checkRow = (row: number) => {
        for (let k = 0;k<n;k++) {
            if (map[k][row] === true) {
                return false
            }
        }
        return true
    }

    const solve = (i: number) => {
        for (let j = 0;j<n;j++) {
            if (!checkRow(j)) {
                continue
            }

            if (set.has(n+i+j) || set.has(i-j)) {
                continue
            }

            if (i === n-1) {
                answer += 1
            } else {
                map[i][j] = true
                set.add(n+i+j)
                set.add(i-j)
                solve(i + 1)
                set.delete(n+i+j)
                set.delete(i-j)
                map[i][j] = false
            }
        }
    }

    solve(0)
    return answer
};