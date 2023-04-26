let pessoa = {
    "nome": "Gabriel",
    "idade": "24",
    "apelido": "Badas"
};

// console.log(pessoa.nome)

let pessoa1 = JSON.stringify(pessoa)
console.log(pessoa1)

let pessoa2 = JSON.parse(pessoa1)
console.log(pessoa2)
