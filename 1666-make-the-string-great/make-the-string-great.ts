function makeGood(s: string): string {
    const q = []
    
    for (const i of s) {
        if (q.length === 0) {
            q.push(i)
            continue
        }
        const lastCode = q[q.length - 1].charCodeAt(0)
        const currentCode = i.charCodeAt(0);
        if (Math.abs(lastCode - currentCode) === 32) {
            q.pop()
        } else {
            q.push(i)
        }
    }

    return q.join('')
};