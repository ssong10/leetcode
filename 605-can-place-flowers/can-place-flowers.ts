function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flowerCount = 0;
    let tmp = 1;

    flowerbed.push(0)
    flowerbed.push(1)
    for (let i =0;i<flowerbed.length; i++) {
        if (flowerbed[i] === 0) {     
            tmp ++
        } else {
            flowerCount += Math.max(Math.floor((tmp -1) / 2), 0)
            tmp = 0;
        }
    }
    return flowerCount >= n
};
