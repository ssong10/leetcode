function generateParenthesis(n: number): string[] {
    let answer = ['']

    while (n) {
        let tmp = []
        for (let i = 0; i< answer.length;i++) {
            for (let j =0;j<answer[i].length;j++) {
                if (answer[i][j] === ')') {
                    tmp.push(answer[i].slice(0,j) + '()' + answer[i].slice(j,answer[i].length))
                }
            }
            tmp.push(answer[i] + '()')
        }

        answer = [...new Set(tmp)]
        n --
    }

    return answer
};
