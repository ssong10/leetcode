const dir = [[-1,0],[1,0],[0,1],[0,-1]]

function nearestExit(maze: string[][], entrance: number[]): number {
    let q = [entrance]
    const visit = maze.map(row => row.map(_ => false))
    visit[entrance[0]][entrance[1]] = true
    let answer = 0
    let next = []
    while (q.length > 0) {
        const [x,y] = q.pop()
        if (answer > 0) {
            if (x === 0 || x === maze.length -1 || y === 0 || y === maze[0].length -1) {
                return answer
            }
        }
        for (let [dx,dy] of dir) {
            if (-1 < x+dx && x+dx < maze.length && -1 < y+dy && y+dy < maze[0].length) {
                if (maze[x+dx][y+dy] === '.' && visit[x+dx][y+dy] === false) {
                    visit[x+dx][y+dy] = true
                    next.push([x+dx,y+dy])
                } 
            }
        }

        if (q.length === 0 && next.length > 0) {
            q = next
            answer ++
            next = []
        }
    }
    return -1
};