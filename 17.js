function carryGifts(gifts, maxWeight) {
  let r = []
  let count = 0;
  if (!gifts.every(gift => maxWeight >= gift.length)) {
    return []
  }
  gifts.map((e)=>{
    if(r[count] && (r[count] + e).trim().length > maxWeight) {
      count++;
    }
    if (e.length <= maxWeight){
      r[count] = r[count] ? r[count] + ' ' + e : e;
    }
  })
  console.log(r)
  return r;
}

// carryGifts(['game', 'bike', 'book', 'toy'], 3) 

carryGifts(['game', 'bike', 'book', 'toy'], 4) 
