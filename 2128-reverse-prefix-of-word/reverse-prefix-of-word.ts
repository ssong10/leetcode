function reversePrefix(word: string, ch: string): string {
    const arr = Array.from(word);

    let i = 0;
    while (i < arr.length) {
        if (arr[i] === ch) {
            for (let j = 0;j < i/2; j++ ){
                const tmp = arr[j]
                arr[j] = arr[i - j]
                arr[i-j] = tmp
            }
            break
        }
        i ++
    }

    return arr.join('')
};