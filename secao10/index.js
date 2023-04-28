function Pessoa(nome, idade, curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso; 
}

Pessoa.prototype.falar= function() {
    console.log(`Oi, pode me chamar de ${this.nome}, tenho ${this.idade} anos, e curso ${this.curso}`)
}

var pessoa1 = new Pessoa("Badas", 24, "ADS")
var pessoa2 = new Pessoa("Jai", 21, "Direito")
//console.log(pessoa1)
pessoa1.falar();
pessoa2.falar();