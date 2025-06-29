function minEatingSpeed(piles: number[], h: number): number {
    let l = 1;
    let r = Math.max(...piles)

    let result = 0;
    while (l<=r) {
        const mid = Math.floor((l+r) / 2)
        const sum = piles.reduce((prev, pile) => prev + Math.ceil(pile / mid), 0)

        if (sum <= h) {
            r = mid - 1
            result = mid
        } else {
            l = mid + 1
        }
    }
    return result
};