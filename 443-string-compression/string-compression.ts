function compress(chars: string[]): number {
    let cur = chars[0]
    let count = 1;
    let i = 1;
    while (i < chars.length) {
        const s = chars[i];
        if (cur === s) {
            count ++
            i ++
        } else {
            const strNum = count > 1 ? Array.from(String(count)) : []

            chars.splice(i-count,count, cur, ...strNum)
            i = i - count + 2 + strNum.length

            cur = s
            count = 1
        }
    }

    const strNum = count > 1 ? Array.from(String(count)) : []
    chars.splice(chars.length-count,count, cur, ...strNum)

    return chars.length
};