const vowels = Array.from('aeiouAEIOU')

function reverseVowels(s: string): string {
    const arr = Array.from(s);
    const index = []
    for (let i=0;i<arr.length;i++) {
        if (vowels.includes(arr[i])) {
            index.push(i)
        }
    }
    for (let i=0;i<index.length / 2;i++) {
        const reverse = index.length - 1 - i
        const tmp = arr[index[i]]

        arr[index[i]] = arr[index[reverse]]
        arr[index[reverse]] = tmp
    }
    return arr.join('')
};