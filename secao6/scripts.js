/* function imprimirNoConsole() {
    console.log("Imprimiu :o")
}

imprimirNoConsole()

function imprimirUmNumero(num) {
    console.log(`O número é ${num}`)
}

imprimirUmNumero(3)

const funcao = (a, b) => {
    return a + b;
}

console.log(funcao(3,4))

const d20 = () => {
    console.log(Math.random())
}

d20()

const dobrar = (n) => n*2

console.log(dobrar(6)) */

function subtrair(x) {
    return function(y) {
        return x - y; 
    }
}

let nx = subtrair(5)
console.log(nx(3))

let ny = subtrair

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont)
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();