function dryNumber(dry, numbers) {
  let r = [...Array(numbers).keys()].map((x) => x + 1);
  return r.filter((n) => (n + '').includes(dry));
}

// dryNumber(1, 15); // [1, 10, 11, 12, 13, 14, 15]
dryNumber(2, 20); // [2, 12, 20]
