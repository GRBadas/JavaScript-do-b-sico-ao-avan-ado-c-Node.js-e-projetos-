const nome = "Badas"
let idade = 24
const serVivo = true

console.log(nome, idade, serVivo)

if (idade >= 18){
    console.log("pode entrar")
    } else {
        console.log("Cresce e aparece")
}

if (nome == 'Badas') {
    console.log("É o Badas :o")
} else {
    console.log("Você não é o Badas >:(")
}

function calcPow(base, expo) {
    console.log(Math.pow(base, expo));
}
let num1 = 2; let num2 = 3; let num3 = 18
calcPow(num1,2)
calcPow(num2,2)
calcPow(num3,2)