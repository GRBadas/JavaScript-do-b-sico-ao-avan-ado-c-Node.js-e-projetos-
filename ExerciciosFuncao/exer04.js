function numeroRandom(maxNumber) {
    return (Math.random()*maxNumber).toFixed()
}

console.log(numeroRandom(20))
console.log(numeroRandom(200))
console.log(numeroRandom(2000))