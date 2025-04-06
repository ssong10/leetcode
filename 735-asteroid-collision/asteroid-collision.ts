function asteroidCollision(asteroids: number[]): number[] {
    const answer = []

    const put = (i: number) => {
        let item = i
        while (true) {
            if (answer.length === 0) {
                answer.push(item)
                return
            }
            const last = answer[answer.length - 1]
            if (last * item > 0 || last < 0 && item > 0) {
                answer.push(item)
                return
            }
            answer.pop()
            if (Math.abs(last) === Math.abs(item)) {
                if (last < 0) {
                    answer.push(last)
                    answer.push(item)
                }
                return
            }
            if (Math.abs(last) > Math.abs(item)) {
                item = last
            }
        }
    }

    for (let i of asteroids) {
        put(i)
    }
    return answer
};