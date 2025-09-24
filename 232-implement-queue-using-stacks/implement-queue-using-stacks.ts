class MyQueue {
    private q: number[] = []
    private r: number[] = []
    constructor() {}

    push(x: number): void {
        while (this.q.length > 0) {
            this.r.push(this.q.pop())
        }

        this.r.push(x)

        while (this.r.length > 0) {
            this.q.push(this.r.pop())
        }
    }

    pop(): number {
        return this.q.pop()
    }

    peek(): number {
        return this.q[this.q.length - 1]
    }

    empty(): boolean {
        return this.q.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */