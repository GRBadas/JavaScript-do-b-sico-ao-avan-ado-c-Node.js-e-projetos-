class runa{
    constructor(grau,speed) {
        this.grau = grau;
        this.speed = speed;
    }

    notaSpeed(grau, speed) {
        const maxRoll = (6*this.grau)
        let nota = (maxRoll - this.speed)
        return nota;
    }
}

violent = new runa(4,24)
console.log(violent.notaSpeed())