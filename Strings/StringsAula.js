/*
let nome = "4, 5, 6, 7, 8, 9, 10"

console.log(nome.trim())
console.log(nome.padStart(4,"0"))
console.log(nome.padEnd(4,"0"))
console.log(nome.split(","))

numeros = nome.split(",")
ordem = numeros.join(" - ")
console.log(ordem.repeat(2))

function imprimirNumeros (...nums) {
    for(let i =0; i < nums.length; i++) {
        console.log(nums[i])
    }
}

imprimirNumeros(3)
imprimirNumeros(4,5,11,3)
imprimirNumeros(1,2,3,4,5)

*/

const pessoa = {
    nome : 'Gabriel',
    sobrenome : 'Badaró',
    idade : 24
}

const {nome: nomeDaPessoa, idade: idadeDaPessoa} = pessoa

console.log(nomeDaPessoa)
console.log(idadeDaPessoa)

let grupo = ["Robervaldo", "Jurumeu", "Aristovan", "Jucicleide"]

const [lider, viceLider, encostado, sumida] = grupo

console.log(sumida)