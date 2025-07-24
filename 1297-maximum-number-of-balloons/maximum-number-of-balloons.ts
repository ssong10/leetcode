function maxNumberOfBalloons(text: string): number {
    const alphabet = {}

    for (let i of text) {
        if (alphabet[i]) {
            alphabet[i] ++
        } else {
            alphabet[i] = 1
        }
    }

    const balloon = Object.entries({ a : 1,o:2,l:2,n:1,b:1 })
    
    let answer = 0;
    while (true) {
        const can = balloon.every(([key,val]) => alphabet[key] >= val * (answer +1))

        if (can) {
            answer ++
        } else {
            break
        }
    }
    return answer
};