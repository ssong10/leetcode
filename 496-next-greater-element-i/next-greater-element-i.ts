function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const hash = {}
    const stack = []

    for (let num of nums2) {
        // 다음 큰 수를 기록
        while (stack.length > 0 && stack[stack.length-1] < num) {
            hash[stack.pop()] = num
        }
        
        stack.push(num)
    }

    return nums1.map(num => hash[num] ?? -1)
};