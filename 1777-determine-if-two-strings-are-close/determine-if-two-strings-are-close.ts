function closeStrings(word1: string, word2: string): boolean {
    const {arr:arrA,map:mapA} = convert(word1)
    const {arr:arrB,map: mapB} = convert(word2)
    for (let i of Object.keys(mapA)) {
        if (!Object.keys(mapB).includes(i)) {
            return false
        }
    }
    
    return arrA.length === arrB.length && !arrA.some((num,i) => num !== arrB[i])
};

function convert(arr: string) {
    const obj = {}
    for (let num of arr) {
        if (num in obj) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }

    return { arr: Object.values(obj).sort(), map: obj}
}