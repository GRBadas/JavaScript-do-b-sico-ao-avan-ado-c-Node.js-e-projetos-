class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
    }

    dirigir() {
        if(this.gasolinaRestante <= 0) {
            console.log("Você está sem combustível")
        } else {
            this.gasolinaRestante--
            console.log(`Você gastou 1L de gasolina, e agora tem ${this.gasolinaRestante} litros restantes`)
        }
    }

    abastecer(gasolina) {
        if(this.gasolinaRestante >= 20) {
            console.log("Seu tanque já está cheio")
        } else if ( (this.gasolinaRestante + gasolina) >= 20 ) {
            console.log(`Você está tentando colocar mais gasolina que o seu tanque suporta, você pode abastecer no máximo ${20 - this.gasolinaRestante} litros no momento !`)
        } else {
            console.log(`Agora você possui ${this.gasolinaRestante += gasolina} litros no tanque`)
            
        }
    }
}

fiatUno = new Carro("Fiat", "prata", 20)
fiatUno.abastecer(9)
