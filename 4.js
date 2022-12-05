function fitsInOneBox(boxes) {
    boxes.sort((a, b) => {
        return a.l - b.l || a.w - b.w || a.h - b.h;
    });
    return sortedBox(boxes)
}

function sortedBox(boxes){
  let second_index;
	for(let first_index = 0; first_index <= boxes.length; first_index++){
  	  second_index = first_index + 1;
      if(boxes[second_index] && (boxes[second_index].l - boxes[first_index].l <= 0)) return false;
      if(boxes[second_index] && (boxes[second_index].w - boxes[first_index].w <= 0)) return false;
      if(boxes[second_index] && (boxes[second_index].h - boxes[first_index].h <= 0)) return false;
  }
  return true;
}

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
]
  
console.log(fitsInOneBox(boxes)) // false
