function letterCombinations(digits: string): string[] {
    const mapper = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    if (digits.length === 0) {
        return []
    }
    const result = []

    const i = 0;
    let str = '';

    function backtracking(str: string, i: number) {
        if (str.length === digits.length) {
            result.push(str)
            return
        }
        
        const num = Number(digits[i]);
        for (let j = 0; j < mapper[num].length; j++) {

            str += mapper[num][j]
            backtracking(str, i + 1)
            str = str.slice(0, str.length - 1)
        }
    }
    backtracking(str, i)

    return result
};