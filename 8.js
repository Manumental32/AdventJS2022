function checkPart(part) {
  return !part.split('').every((v, i) => {
    let aux = part.split('');
    aux.splice(i, 1); // splice(start, deleteCount)
    // console.log(aux)
    if(aux.join('') === aux.reverse().join('')) return false;
    return true;
  });
}

// checkPart("uwu") // true
// checkPart("miidim") // true
// checkPart("zzzoonzzz") // true
checkPart("midu") // false
