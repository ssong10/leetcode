class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(val: number): void {
    this.heap.push(val);
    let current = this.heap.length - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.heap[parent] <= this.heap[current]) {
        break;
      }

      this.swap(parent, current);
      current = parent;
    }
  }

  pop(): number {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      let current = 0;

      while (true) {
        const left = 2 * current + 1;
        const right = 2 * current + 2;
        let smallest = current;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        if (smallest === current) {
          break;
        }

        this.swap(current, smallest);
        current = smallest;
      }
    }

    return min;
  }

  size(): number {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinHeap();
    for (let num of nums) {
        minHeap.enqueue(num)
        if (minHeap.size() > k) {
            minHeap.pop()
        }
    }

    return minHeap.pop()
};