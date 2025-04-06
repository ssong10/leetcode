class RecentCounter {
    public counter = []

    constructor() {
        this.counter = []
    }

    ping(t: number): number {
        this.counter.push(t)
        const tmp = this.counter
        let count = 0

        for (let i of tmp) {
            if (i > t) {
                break
            }
            if (t-3000 <= i && i <= t) {
                count ++
            }
        }
        return count
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */