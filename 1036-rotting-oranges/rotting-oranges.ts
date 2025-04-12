const dir = [[-1,0],[1,0],[0,1],[0,-1]]

function orangesRotting(grid: number[][]): number {
    let rotten = []
    for (let i = 0;i<grid.length;i++) {
        for (let j=0;j<grid[0].length;j++) {
            if (grid[i][j] === 2){
                rotten.push([i,j])
            }
        }
    }

    let answer = 0
    let next = []
    while (rotten.length > 0) {
        const [x,y] = rotten.pop()
        for (let [dx,dy] of dir) {
            if (-1 < x+dx && x+dx < grid.length && -1 < y+dy && y+dy < grid[0].length) {
                if (grid[x+dx][y+dy] === 1) {
                    grid[x+dx][y+dy] = 2
                    next.push([x+dx,y+dy])
                } 
            }
        }

        if (rotten.length === 0) {
            if (next.length > 0) {
                rotten = next
                answer ++
                next = []
            } else {
                break
            }
        }
    }

    for (let i = 0;i<grid.length;i++) {
        for (let j=0;j<grid[0].length;j++) {
            if (grid[i][j] === 1){
                return -1
            }
        }
    }    
    
    return answer
};