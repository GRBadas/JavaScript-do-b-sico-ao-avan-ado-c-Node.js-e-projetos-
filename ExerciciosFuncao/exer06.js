function tipoDoDado(dado) {
    if(typeof dado === "number") {
        console.log(`Esse dado é um número : ${dado}`)
    } else if(typeof dado === "boolean") {
        console.log(`Esse dado é um booleano : ${dado}`)
    } else {
        console.log(`Esse dado é uma string : ${dado}`)
    }
}

tipoDoDado(3)
tipoDoDado(true)
tipoDoDado("false")