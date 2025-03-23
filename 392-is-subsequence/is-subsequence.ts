function isSubsequence(s: string, t: string): boolean {
    let index = 0;
    for (let i of t) {
        if (index === s.length) {
            break
        }
        if (s[index] === i) {
            index ++
        }
    }
    if (index === s.length) {
        return true
    }

    return false
};