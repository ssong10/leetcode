function searchRange(nums: number[], target: number): number[] {
   const answer = [-1,-1]
   const binary = (start: number, end: number, t: number, type: string) => {
        if (start === end) {
            return start
        }
        const mid = Math.floor((start + end) /2)
        const same = nums[mid] === t
        
        if (nums[mid] > t || same && type === 'min') {
            return binary(start, mid,t, type)
        } else {
            return binary(mid + 1, end,t, type)
        }
   } 
    const min = binary(0, nums.length, target, 'min')
    if (nums[min] === target) {
        answer[0] = min
    }

    const max = binary(0, nums.length, target, 'max')
    if (nums[max -1] === target) {
        answer[1] = max -1
    }
    
   return answer
};