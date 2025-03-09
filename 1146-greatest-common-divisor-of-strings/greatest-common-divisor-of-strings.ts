function gcdOfStrings(str1: string, str2: string): string {
    const big = Math.max(str1.length, str2.length)
    const bigStr = str1.length < str2.length ? str2 : str1
    let result = ''
    let answer = ''
    for (let i = 0; i < big; i ++) {
        if (str1[i] === str2[i]) {
            result += str1[i]
            if (str1.length % result.length === 0 && str2.length % result.length === 0) {
                if (check(result, str1) && check(result, str2)) {
                    answer = result
                }   
            }
        }
    }
    return answer
};

const check = (s1: string, s2: string) => {
    for (let i = 0; i < s2.length; i++) {
        if (s1[i % s1.length] !== s2[i]) {
            return false
        }
    }
    return true
}