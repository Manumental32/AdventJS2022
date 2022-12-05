function distributeGifts(packOfGifts, reindeers) {
  let totalpg = 0;
  packOfGifts.forEach(r => totalpg += r.length)
  let totalfr = 0;
  reindeers.forEach(r => totalfr += r.length*2 )
  return Math.trunc(totalfr / totalpg);
}

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(["book", "doll", "ball"],["dasher", "dancer"] )) // 2
