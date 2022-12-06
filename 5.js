function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let combinaciones = [];
    combinaciones.push([], [giftsCities[0]])

    giftsCities.map(x => {
        const newList = combinaciones.map(combinacion => {
            let _combinacion = [...combinacion]
            console.log('_combinacion',_combinacion)
            if(_combinacion.length < maxCities) {
                _combinacion.push(x)
            }
            return _combinacion
        })
        combinaciones = combinaciones.concat(newList)
    })
    combinaciones.shift()

    return Math.max(
        ...combinaciones.map( x => {
            let sum = x.reduce((total, num)=> total + num)
            return sum > maxGifts ? 0 : sum
        })
    )
}

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

// getMaxGifts([50], 100, 1) // 50

// getMaxGifts([1, 2, 1], 4, 7) // 20

console.log('getMaxGifts',getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
// getMaxGifts([50], 15, 1) // 0
// getMaxGifts([50], 100, 1) // 50
// getMaxGifts([50, 70], 100, 1) // 70
// getMaxGifts([50, 70, 30], 100, 2) // 100
// getMaxGifts([50, 70, 30], 100, 3) // 100
// getMaxGifts([50, 70, 30], 100, 4) // 100
