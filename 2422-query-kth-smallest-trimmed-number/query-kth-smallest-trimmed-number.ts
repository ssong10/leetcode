function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
    const map = {}
    const get = (num: number) => {
        if (map[num]) {
            return map[num]
        }

        map[num] = nums.map(i => i.slice(-num))
            .map((n,i) => ({n,i}))
            .sort((a,b) => a.n.localeCompare(b.n))

        return map[num]
    }

    return queries.map(([k, num]) => {
        const numList = get(num)
        return numList[k - 1].i
    })
};