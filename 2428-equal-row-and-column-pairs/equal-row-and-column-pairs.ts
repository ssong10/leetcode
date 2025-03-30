function equalPairs(grid: number[][]): number {
    const rows = {}
    const cols = {}
    const put = (obj: Record<string,number> ,arr: number[]) => {
        const key = arr.join('.')
        if (key in obj) {
            obj[key] += 1
        } else {
            obj[key] = 1
        }
    }
    for (let i = 0; i<grid.length; i++) {
        put(rows, grid[i])

        const tmp = grid.map(row => row[i])

        put(cols, tmp)
    }
    let answer = 0;
    for (let i of Object.keys(rows)) {
        if (i in cols) {
            answer += rows[i] * cols[i]
        }
    }
    return answer
};