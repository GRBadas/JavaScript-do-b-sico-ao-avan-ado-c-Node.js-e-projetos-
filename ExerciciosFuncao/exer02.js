function perguntarIdade(idade) {
    idade = prompt("Digite sua idade: ")
    document.write(
        `Você tem ${idade} anos`
    )
}

function somarNumeros(n1, n2) {
    n1 = prompt("Digite o n1")
    n2 = prompt("Digite o n2")
    document.write("O resultado da sua soma é : " + (Number(n1) + Number(n2)))
}

somarNumeros(3,4)