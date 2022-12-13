function checkJump(heights) {
  let max = Math.max(...heights);
  let maxIndex = heights.indexOf(max)
  let isSorted = heights.every((e, i)=>{
    let next = i + 1;
    return (i < maxIndex) ? !(heights[next] - e < 0) : !(e - heights[next] < 0);
  })
  return max !== heights[0] && max !== heights.pop() && isSorted
}

checkJump([1, 3, 8, 5, 2]) // true
checkJump([1, 7, 3, 5]) // false

// checkJump([1, 2, 1])  // true
// checkJump([1, 3, 8, 5, 2]) // true
// checkJump([1, 2, 3, 2, 1]) // true
// checkJump([1, 2, 2, 2, 1]) // true
// checkJump([0, 1, 0]) // true
// checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]) // true
// checkJump([2, 2, 2, 2]) // false
// checkJump([1, 2, 3]) // false
