function repeatLimitedString(s: string, repeatLimit: number): string {
    const counter = {}
    let result = ''
    for (let i of s) {
        if (i in counter) {
            counter[i] += 1
        } else {
            counter[i] = 1
        }
    }

    const wordsList = Object.keys(counter).sort()

    let prev = ''
    while (wordsList.length > 0) {
        const word = wordsList.pop();
        
        const limit = prev ? 1 : repeatLimit
        const repeat = Math.min(limit, counter[word])
        
        counter[word] -= repeat
        if (counter[word] > 0 && wordsList.length > 0) {
            const w = wordsList.pop()
            wordsList.push(word)
            wordsList.push(w)
        }
        if (prev) {
            prev =''
        } else {
            if (counter[word]) {
                prev = word
            }
        }
        
        result += word.repeat(repeat)
    }
    return result
};