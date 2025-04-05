function removeStars(s: string): string {
    let answer = []
    for (let i of s) {
        if (i === '*') {
            answer.pop()
        } else {
            answer.push(i)
        }
    }

    return answer.join('')
};