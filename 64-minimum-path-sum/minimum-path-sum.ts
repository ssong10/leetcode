function minPathSum(grid: number[][]): number {
    const [x,y] = [grid[0].length, grid.length]
    const map = Array(y).fill(0).map(() => Array(x).fill(0))

    for (let i = 0; i<y;i++) {
        for (let j = 0;j<x;j++) {
            if (i+j ===0) {
                map[i][j] = grid[i][j]
                continue
            }
            const candidate = []
            if (i > 0) {
                candidate.push(map[i-1][j])
            }
            if (j > 0) {
                candidate.push(map[i][j-1])
            }
            map[i][j] = Math.min(...candidate) + grid[i][j]
        }
    }

    return map[y-1][x-1]
};