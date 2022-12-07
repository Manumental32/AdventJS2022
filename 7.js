function getGiftsToRefill(a1, a2, a3) {
    let counts = {};
    a1 = [...new Set(a1)];
    a2 = [...new Set(a2)];
    a3 = [...new Set(a3)];
    let a0 = [...a1,...a2,...a3];

    for (const num of a0) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let uniques = [...new Set(a0)];
    return uniques.filter(u=>counts[u] === 1)
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
// const gifts =getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])
console.log('gifts:',gifts)
