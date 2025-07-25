function canConstruct(ransomNote: string, magazine: string): boolean {
    const counter = {}

    for (let s of magazine) {
        if (counter[s]) {
            counter[s] ++ 
        } else {
            counter[s] = 1
        }
    }

    
    for (let s of ransomNote) {
        if (counter[s] > 0) {
            counter[s] -= 1
        } else {
            return false
        }
    }

    return true
};