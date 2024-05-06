/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const consecutiveNums = {}

    for (let num of nums) {
        consecutiveNums[num] = 0
    }

    const findNext = (num) => {
        if (num + 1 in consecutiveNums) {
            if (!consecutiveNums[num + 1]) {
                consecutiveNums[num + 1] = findNext(num + 1)
            }
            consecutiveNums[num] = consecutiveNums[num + 1] + 1
        } else {
            consecutiveNums[num] = 1
        }
        return consecutiveNums[num]
    }

    let answer = 0
    for (let num of nums) {
        if (!consecutiveNums[num]) {
            consecutiveNums[num] = findNext(num)
            if (answer < consecutiveNums[num]) {
                answer = consecutiveNums[num]
            }
        }
    }
    return answer
};