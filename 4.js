function fitsInOneBox(boxes) {
    return boxes.sort((a, b) => {
        return (a.l + a.w + a.h) - (b.l + b.w + b.h);
    }).every((box,i) => {
      if(i === 0) return true;
      const prev = boxes[i - 1];
      return box.l > prev.l && box.w > prev.w && box.h > prev.h
    })
}

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]) //false

fitsInOneBox([
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]) //false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) //true
