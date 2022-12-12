function checkJump(heights) {
  console.log('heights',heights)
  let max = Math.max(...heights);
  let index = heights.indexOf(max)
  console.log('index',index)
  console.log('max',max)
  let aux = heights.slice(0,index + 1)
  let aux2= heights.slice(index)
  console.log('aux',aux)
  console.log('aux2',aux2)
  
  function sorted(arr){
    let second_index;
	for(let first_index = 0; first_index < arr.length; first_index++){
  	  second_index = first_index + 1;
      if(arr[second_index] - arr[first_index] < 0) return false;
    }
    return true;
}
  
  let isSorted = sorted(aux)
  console.log('isSorted',isSorted)
  let isSortedEnd = sorted(aux2.reverse())
  console.log('isSortedEnd',isSortedEnd)
  
  let r = max !== heights[0] && max !== heights.pop() && isSorted && isSortedEnd
  console.log('r',r)
  return r
}

// checkJump([1, 3, 8, 5, 2]) // true
// checkJump([1, 7, 3, 5]) // false

// checkJump([1, 2, 1])  // true
// checkJump([1, 3, 8, 5, 2]) // true
// checkJump([1, 2, 3, 2, 1]) // true
// checkJump([1, 2, 2, 2, 1]) // true
// checkJump([0, 1, 0]) // true
// checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]) // true
// checkJump([2, 2, 2, 2]) // false
checkJump([1, 2, 3]) // false
