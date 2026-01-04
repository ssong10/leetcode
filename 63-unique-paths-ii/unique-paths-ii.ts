function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const x = obstacleGrid[0].length
    const y = obstacleGrid.length
    const map = new Array(y).fill(0).map(
        (i) => new Array(x).fill(0)
    )

    for (let i=0;i<y;i++) {
        for (let j=0;j<x;j++) {
            if (obstacleGrid[i][j] === 1) {
                continue
            }
            if (i+j===0) {
                map[i][j] = 1
                continue
            }
            let tmp = 0
            if (i>0) {
                tmp += map[i-1][j]
            }
            if (j>0) {
                tmp += map[i][j-1]
            }
            map[i][j] = tmp
        }
    }

    return map[y-1][x-1]
};