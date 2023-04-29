class enderecoCliente {
    constructor(cidade, estado, rua, bairro) {
        this.cidade = cidade;
        this.estado = estado;
        this.rua = rua;
        this.bairro = bairro;
    }

    set atualizarCidade(cidade) {
        this.cidade = cidade;
    }
    set atualizarEstado(estado) {
        this.estado = estado;
    }
    set atualizarRua(rua) {
        this.rua = rua;
    }
    set atualizarBairro(bairro) {
        this.bairro = bairro;
    }
}

cliente1 = new enderecoCliente("Salvador", "Bahia", "Dr Augusto", "Costa azul")
cliente1.atualizarRua("Dr. Augusto Lopes Pontes")

console.log(cliente1)