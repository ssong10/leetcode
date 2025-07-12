const isLetter = (c: string): boolean => {
    return 65 <= c.charCodeAt(0) && 90 >= c.charCodeAt(0) || 97 <= c.charCodeAt(0) && 122 >= c.charCodeAt(0)
}
function reverseOnlyLetters(s: string): string {
    const arr = Array.from(s)
    let i = 0;
    let j = s.length - 1;

    while (i<=j) {
        const isLeftLetter = isLetter(arr[i])
        const isRightLetter = isLetter(arr[j])
        if (!isLeftLetter) {
            i += 1
            continue
        }
        if (!isRightLetter) {
            j -= 1
            continue
        }
        if (isLeftLetter && isRightLetter) {
            const tmp = arr[j]
            arr[j] = arr[i]
            arr[i] = tmp
            i += 1
            j -= 1
        }
    }

    return arr.join('')
};