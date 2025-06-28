function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const sortedPotions = potions.sort((a,b) => a-b)

    const getIndex = (spell: number) => {
        let l = 0;
        let r = sortedPotions.length - 1
        while (l <= r) {
            const mid = Math.floor((l+r)/2);
            const val = sortedPotions[mid] * spell
            if (val < success) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return r
    }
    
    return spells.map(spell => {
        const index = getIndex(spell)
        return potions.length - 1 - index
    })
};