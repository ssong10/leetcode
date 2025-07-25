function lengthOfLongestSubstring(s: string): number {
    let answer = 0;
    const char = {}

    const get = (s: string) => {
        const code = s.charCodeAt(0)
        if (!char[code]) {
            char[code] = 0
        }
        return code
    }

    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (char[get(s[j])] > 0) {
            char[get(s[i])] = char[get(s[i])] - 1
            i ++
        } else {
            char[get(s[j])] = char[get(s[j])] + 1
            j++
            answer = Math.max(answer, j - i)
        }
    }

    return answer
};