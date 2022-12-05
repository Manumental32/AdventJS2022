function distributeGifts(packOfGifts, reindeers) {
  const pg = packOfGifts.map(r => r.length )
  const totalpg = pg.reduce((a, b) => a + b, 0);
  const fr = reindeers.map(r => r.length*2 )
  const totalfr = fr.reduce((a, b) => (a + b), 0);
  return Math.trunc(totalfr / totalpg);
}

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts()) // 2
