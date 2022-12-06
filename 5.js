function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let response = 0;
    let cities = 0;
    let available = maxGifts - response;

    let index = 0
    function test(a,b) {
        index += 1;
        return index % 2 ? (b - a) : (a - b); 
    }
    giftsCities.sort((a,b)=> test(a,b));
    giftsCities.forEach(g => {
        if(cities < maxCities && available >= g && g <= maxGifts) {
            response += g
            cities++;
            available = maxGifts - response;
        }
    })
    console.log('response', response)
    return response;
}
// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

// getMaxGifts([50], 100, 1) // 50

getMaxGifts([1, 2, 1], 2, 2) // 20

// getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
// getMaxGifts([50], 15, 1) // 0
// getMaxGifts([50], 100, 1) // 50
// getMaxGifts([50, 70], 100, 1) // 70
// getMaxGifts([50, 70, 30], 100, 2) // 100
// getMaxGifts([50, 70, 30], 100, 3) // 100
// getMaxGifts([50, 70, 30], 100, 4) // 100
