let numeros = [10,20,30,40,50,60,70,80,90,100]

 numeros.push(99)
 numeros.shift()
 for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

elementoRemovido = numeros.pop()
console.log(elementoRemovido)
console.log(numeros.slice(2, -2))

numeros.forEach(dezena => {
    console.log("A unidade é : " + (dezena/10))
}) 

console.log(numeros.includes(30))

console.log(numeros.reverse())


