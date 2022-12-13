function selectSleigh(distance, sleighs) {
  const MAX_P = 20;
  let r = sleighs.filter((s,i)=> distance * s.consumption <= MAX_P).pop()
  console.log('r',r)
  return r ? r.name : null;
}

const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]
selectSleigh(30, sleighs)

// selectSleigh(1, [
//   { name: 'pheralb', consumption: 0.3 },
//   { name: 'TMChein', consumption: 0.5 }
// ])
// selectSleigh(10, [
//   { name: 'Pedrosillano', consumption: 1 },
//   { name: 'SamarJaffal', consumption: 5 }
// ])
