function findDifference(nums1: number[], nums2: number[]): number[][] {
    const a = new Set(nums1)
    const b = new Set(nums2)

    for (let num of nums1) {
        if (b.has(num)) {
            b.delete(num)
            a.delete(num)
        }
    }
    return [[...a],[...b]]
};
