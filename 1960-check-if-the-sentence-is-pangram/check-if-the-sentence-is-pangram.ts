function checkIfPangram(sentence: string): boolean {
    const alphabet = Array(26).fill(false)

    for (let i =0;i<sentence.length;i++) {
        alphabet[sentence[i].charCodeAt(0) - 97] = true
    }
    
    return alphabet.every(Boolean)
};