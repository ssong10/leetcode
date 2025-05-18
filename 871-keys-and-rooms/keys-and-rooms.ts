function canVisitAllRooms(rooms: number[][]): boolean {
    let cango = rooms[0]
    const visited = new Array(rooms.length).fill(false)
    visited[0] = true
    let tmp = [];
    while (cango.length) {
        console.log(cango)
        const next = cango.pop()
        visited[next] = true
        for (let i of rooms[next]) {
            if (visited[i] === false) {
                tmp.push(i)
            }
        }
        if (cango.length === 0) {
            cango = tmp
            tmp = []
        }
    }

    return visited.every(Boolean)
};