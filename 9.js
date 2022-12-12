function countTime(leds) {
    leds = leds.join('').split(1);
    leds[0] += leds.pop();
    let count = Math.max(...leds.map(led =>led.length));
    return count * 7;
}
  
//   countTime([0, 0, 0, 1]) // 21
//   countTime([0, 0, 1, 0, 0]) // 28
//   countTime([1, 0, 0, 1, 0, 0]) // 14
//   countTime([1, 1, 0, 0, 0, 0]) // 28
countTime([0, 1, 0, 0, 1, 0, 0, 0]) // 28
