function countTime(leds) {
    let response = 0;
    function getTime(leds) {
        let auxLeds = [...leds]
        for (let index = 0; index < auxLeds.length; index++) { 
            // let prevValue = (leds[index+1] === undefined) ? leds[0] : (leds[index+1]);
            // console.log('prevValue',prevValue);
            auxLeds[index] = ((leds[index+1] === undefined) ? leds[0] : (leds[index+1]) === 1) ? 1 : auxLeds[index];
        }
        response++;
        return auxLeds
    }

    while(leds.some(e => (e === 0))){
        leds = getTime(leds);
    }
    // console.log('response f',response)
    return response * 7;
}
  
//   countTime([0, 0, 0, 1]) // 21
//   countTime([0, 0, 1, 0, 0]) // 28
//   countTime([1, 0, 0, 1, 0, 0]) // 14
  countTime([1, 1, 0, 0, 0, 0]) // 28
