function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a,b) => a-b)

    const sum = []
    let total = 0;
    for (let num of nums) {
        total += num
        sum.push(total)
    }

    return queries.map(query => {
        let index = sum.findIndex(target => query < target)
        return index === -1 ? sum.length : index
    })
};