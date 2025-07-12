function reverseWords(s: string): string {
    const reverse = (str: string) => {
        const arr = Array.from(str);
        for (let i =0; i < arr.length/2;i++) {
            const tmp = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = tmp
        }
        return arr.join('')
    }
    return s.split(' ').map(reverse).join(' ')
};