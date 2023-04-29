class itemCarrinho {
    constructor(produto, valor) {
        this.produto = produto;
        this.valor = valor;
    }
}

class CarrinhoShein {
    constructor(itens = []) {
        this.itens = itens
        this.valorTotal = this.calcularValorTotal()
    }
    calcularValorTotal() {
        let total = 0;
        for(let i = 0; i < this.itens.length; i++) {
            total += this.itens[i].valor;
        }
        return total;
    }

    comprar() {
        let produtosComprados = ""
        for(let i = 0; i < this.itens.length; i++) {
            produtosComprados += this.itens[i].produto
            if(i != this.itens.length -1) {
                produtosComprados += ", "
            }
        }
        console.log(`Você comprou ${produtosComprados}, custando um total de : ${this.valorTotal}`)
    }

    removerItem(item) {
        const index = this.itens.indexOf(item)
        if(index !=- -1) {
            this.itens.splice(index,1)
            this.valorTotal = this.calcularValorTotal()
            console.log(`O item ${item.produto} foi removido do carrinho`)
        } else {
            console.log("O produto não está no carrinho.")
        }
    }
}

calça = new itemCarrinho("Calça", 59.90)
bocaRosa = new itemCarrinho("Boca Rosa", 49.50)
perfume = new itemCarrinho("Perfume importado", 729.99)
compras = new CarrinhoShein([calça, bocaRosa, perfume])
compras.removerItem(perfume)
//console.log(compras)
compras.comprar()