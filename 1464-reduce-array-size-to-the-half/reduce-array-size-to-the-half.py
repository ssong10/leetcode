import heapq

class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        counter = {}
        for i in arr:
            if i in counter:
                counter[i] += 1
            else:
                counter[i] = 1

        heap = []
        for k,v in counter.items():
            heapq.heappush(heap, [-v,k])

        tmp = 0
        for i in range(len(heap)):
            value = heapq.heappop(heap)
            tmp += -1 * value[0]
            if tmp >= (len(arr) // 2):
                return i + 1
            
        return len(heap)