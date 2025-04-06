class RecentCounter {
    public counter = []
    public start = 0

    constructor() {
        this.counter = []
        this.start = 0
    }

    ping(t: number): number {
        this.counter.push(t)
        const tmp = this.counter
        let count = 0

        for (let i = this.start ;i<tmp.length;i++) {
            const val = tmp[i]
            if (val > t) {
                this.start = i
                break
            }
            if (t-3000 <= val && val <= t) {
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