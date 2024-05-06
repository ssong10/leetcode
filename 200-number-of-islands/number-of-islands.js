/**
 * @param {character[][]} grid
 * @return {number}
 */


const dirs = [[1,0],[0,1],[-1,0],[0,-1]]

var numIslands = function(grid) {
    let result = 0;

    for (let i = 0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0"
                result ++
                const tmp = [[i,j]]

                while (tmp.length > 0) {
                    const [y,x] = tmp.pop()
                    for (let [dy,dx] of dirs) {
                        const yy = y+dy
                        const xx = x+dx
                        if (-1 < yy && yy < grid.length && -1 < xx && xx < grid[0].length) {
                            if (grid[y+dy][x+dx] === "1") {
                                grid[y+dy][x+dx] = "0"
                                tmp.push([y+dy,x+dx])
                            }                             
                        } 
                    }
                }
            }
        }
    }
    return result
};
