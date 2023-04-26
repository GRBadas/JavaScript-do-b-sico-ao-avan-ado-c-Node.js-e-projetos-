const arr1 = [10,20,30,40,50]
const arr2 = [100,200,300]

function verificarTamanho(arr) {
    if(arr.length < 5) {
        console.log("Pequeno demais kkj")
    } else if(arr.length > 5) {
        console.log("Pra que isso tudo ?")
    } else {
        console.log("PERFEITO")
    }
}

verificarTamanho(arr2)