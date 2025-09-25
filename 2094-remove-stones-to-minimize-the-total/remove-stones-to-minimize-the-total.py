import heapq

class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        q = []

        for pile in piles:
            heapq.heappush(q, -pile)
        
        for i in range(k):
            big = heapq.heappop(q)
            heapq.heappush(q, big // 2)
        
        return -sum(q)