function mergeAlternately(word1: string, word2: string): string {
    let result = ''
    const minLength = Math.min(word1.length, word2.length)
    for (let i = 0;i < minLength; i ++) {
        result += word1[i] + word2[i]
    }

    if (word1.length < word2.length) {
        result += word2.slice(minLength, word2.length)
    } else {
        result += word1.slice(minLength, word1.length)
    }
    return result
};