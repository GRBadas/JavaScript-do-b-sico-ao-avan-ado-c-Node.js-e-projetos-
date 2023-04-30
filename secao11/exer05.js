class contaBancaria {
    constructor(saldoCC, saldoCP, jurosPoup) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.jurosPoup = jurosPoup
    }

    depositar(valor) {
        this.saldoCC += valor
    }

    sacar(valor) {
        if(this.saldoCC < valor) {
            console.log("Você n tem esse dinheiro todo n, tá maluco ?")
        } else {
            this.saldoCC -= valor
            console.log(`Você sacou ${valor} reais, e tem ${this.saldoCC} reais restantes!`)
        }
    }

    poupar(valor) {
        if(this.saldoCC < valor) {
            console.log("Você n tem esse dinheiro todo n, tá maluco ?")
        } else {
            this.saldoCC -= valor
            this.saldoCP += valor
            console.log(`Você transferiu ${valor} reais para a poupança, e tem ${this.saldoCC} reais restantes em conta corrente, e ${this.saldoCP} reais em poupança`)
        }
    }

    aplicarJuros() {
        let juros = (this.saldoCP*this.jurosPoup) / 100
        this.saldoCP += juros;
    }
}

class contaEspecial extends contaBancaria {
    constructor(saldoCC, saldoCP, jurosPoup) {
        super(saldoCC, saldoCP, jurosPoup*2);
    }
    
}

contaSP = new contaEspecial(500,1000,1.02)
conta1 = new contaBancaria(500,1000,1.02)
/* conta1.depositar(300)
conta1.sacar(150)
conta1.poupar(300) */
contaSP.aplicarJuros()
conta1.aplicarJuros()
console.log(conta1)
console.log(contaSP)