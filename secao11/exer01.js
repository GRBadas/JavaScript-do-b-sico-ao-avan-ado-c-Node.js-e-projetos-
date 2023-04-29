class contaBanco {
    constructor(saldo, user) {
        this.saldo = saldo;
        this.user = user;
    }

    depositar(deposito) {
        this.saldo += deposito;
    }

    sacar(saque) {
        if(saque > this.saldo) {
            console.log("Tá achando que é rico ?")
        } else (this.saldo -= saque)
    }
}

conta1 = new contaBanco(500, "Badas")
conta1.depositar(100)
conta1.sacar(1000)
console.log(conta1)