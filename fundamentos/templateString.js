const nome = "Jana"
const concatenacao = "Olá " + nome + "!"
const template = `
Olá 
${nome}!
`
console.log(concatenacao, template)

//Expressores
console.log(`1 + 1 = ${1+1 }`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)