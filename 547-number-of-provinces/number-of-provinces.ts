function findCircleNum(isConnected: number[][]): number {
    let result = 0;
    let circle = [];
    const visited = new Array(isConnected.length).fill(false)

    for (let i=0; i<isConnected.length; i++) {
        if (visited[i]) {
            continue
        }
        result ++ 
        let tmp = [i]
        while (tmp.length > 0) {
            const val = tmp.pop()
            visited[val] = true
            for (let j = 0; j < isConnected.length; j++) {
                const connected = isConnected[val][j]
                if (!connected || visited[j]) {
                    continue
                }
                visited[j] = true
                tmp.push(j)
            }
        }
    }

    return result;
};