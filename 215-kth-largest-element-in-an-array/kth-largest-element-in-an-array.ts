class MinHeap {
    public q: number[]
    public min: number 
    constructor() {
        this.q = []
    }

    enqueue(val: number): number {
        const index = this.q.findIndex(num => num <= val);
        if (index < 0) {
            this.q.push(val)
        } else {
            this.q.splice(index, 0, val);
        }
        return this.q.length
    }

    pop() {
        return this.q.pop()
    }
}

function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinHeap();
    for (let num of nums) {
        const size = minHeap.enqueue(num)
        if (size > k) {
            minHeap.pop()
        }
    }

    return minHeap.q.pop()
};