const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem")) 

const reg2 = /carro/

console.log(reg2.test("Tem carro?"))
console.log(reg2.test("Não tem"))

console.log(/Badas/.test("Badas esteve aqui ?"))