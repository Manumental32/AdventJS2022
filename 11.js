function getCompleted(part, total) {
  const MCD = (a, b) => {
    let c;
      while (b) {
        c = b
        b = a % b
        a = c
      }
    return a
  }
  let parts = part.split(':');
  let totals = total.split(':');
  // console.log('parts',parts)
  // console.log('totals',totals)
  let partRed = +parts[0] * 3600 + +parts[1] * 60 + +parts[2];
  let totalRed = +totals[0] * 3600 + +totals[1] * 60 + +totals[2];
  // console.log('partRed',partRed)
  // console.log('totalRed',totalRed)
  const MCDof = MCD(partRed,totalRed );
  const partEnd = partRed / MCDof;
  const totalEnd = totalRed / MCDof;
  
  return partEnd + '/' + totalEnd
}

// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5
