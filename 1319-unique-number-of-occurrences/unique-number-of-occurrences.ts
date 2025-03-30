function uniqueOccurrences(arr: number[]): boolean {
    const obj = convert(arr)
    
    const values = Object.values(obj)
    return values.length === new Set(values).size
};

function convert(arr: number[]) {
    const obj = {}
    for (let num of arr) {
        if (num in obj) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }
    return obj
}