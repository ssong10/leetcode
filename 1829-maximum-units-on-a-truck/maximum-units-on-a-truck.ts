function maximumUnits(boxTypes: number[][], truckSize: number): number {
    const boxes = boxTypes.sort((a,b) => b[1] - a[1])

    let answer = 0;
    for (let box of boxes) {
        const count = Math.min(truckSize, box[0])

        truckSize -= count
        answer += count * box[1]

        if (truckSize === 0){
            break
        }
    }

    return answer
};


