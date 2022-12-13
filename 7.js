function getGiftsToRefill(a1, a2, a3) {
    const all = [...new Set([...new Set(a1),...new Set(a2),...new Set(a3)])];
    return all.filter(g=>{
      return a1.includes(g) + a2.includes(g) + a3.includes(g) === 1
    })
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
// const gifts =getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])
console.log('gifts:',gifts)
