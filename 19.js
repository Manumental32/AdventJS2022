function sortToys(toys, positions) {
  const r = [];
  const min = Math.min(...positions);
  positions.forEach((p, i) => (r[p - min] = toys[i]));
  return r;
}

sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])[
  ('ps4', 'xbox', 'switch', 'pc', 'nintendo')
];

// sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]);
// [
//   "puzzle",
//   "car",
//   "ball",
//   "doll"
// ]
