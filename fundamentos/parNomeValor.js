// par nome/valor
const saudacao = "Opa" //contexto lexico 1

function exec() {
    const saudacao = "Fala" //contexto lexico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nomes/valores

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
}

console.log(cliente)