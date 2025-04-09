class RecentCounter {
    public counter = []
    public start = 0

    constructor() {}

    ping(t: number): number {
        this.counter.push(t)
        for (let i=this.start; i<this.counter.length; i++) {
            const val = this.counter[i]
            if (t - 3000 > val) {
                this.start = i + 1
            }
        }
        return this.counter.length - this.start
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */