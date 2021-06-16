//Armazenando funcao dentro de uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


//Armazenando uma funcao arrow em uma varial

const soma = (a, b) => { return a + b }
console.log(soma(2, 4))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 3))