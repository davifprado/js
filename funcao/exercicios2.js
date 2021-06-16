// // function stringConcat(text) {
// //     return `Olá ${text}!`
// // }
// // console.log(stringConcat('Jana'))
// //     //----------------------------------//
// // function diasVivos(idade) {
// //     return idade * 365
// // }
// // console.log(diasVivos(25))
// //     //----------------------------------//
// // function salario(qtdHoras, valorHora) {
// //     return `Salário igual a ${qtdHoras * valorHora}`
// // }
// // // console.log(salario(220, 20))
// // //     //----------------------------------//

// // function receberSomenteOsParesDeIndicesPares(param) {
// //     let resposta = []
// //     param.forEach((n, i) => {
// //         if ((i % 2 == 0) && (n % 2 == 0)) {
// //             resposta.push(n)
// //         }

// //     })
// //     console.log(resposta)
// // }

// // receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// // receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]


// // function removerPropriedade(objeto, propriedade) {
// //     delete objeto[propriedade]
// //     console.log(objeto)
// // }

// // removerPropriedade({ a: 1, b: 2 }, "b") // retornará {b: 2}
// // removerPropriedade({
// //         id: 20,
// //         nome: "caneta",
// //         descricao: "Não preenchido"
// //     }, "nome") // retornará {id: 20, nome: "caneta"}


// // function filtrarNumeros(dados) {
// //     let dadosFiltrados = []
// //     dados.forEach(n => {
// //         if (typeof n == 'number') {
// //             dadosFiltrados.push(n)
// // //         }
// // //     })
// // //     console.log(dadosFiltrados)
// // // }

// // // filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// // // filtrarNumeros(["a", "c"]) // retornará []

// // function objetoParaArray(dados) {
// //     let dadosFiltrados = []
// //     Object.entries(dados).forEach(([chave, valor]) => {
// //         dadosFiltrados.push([chave, valor])
// //     })
// //     console.log(dadosFiltrados)
// // }


// // objetoParaArray({
// //         nome: "Maria",
// //         profissao: "Desenvolvedora de software"
// //     }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
// // objetoParaArray({
// //         codigo: 11111,
// //         preco: 12000
// //     }) // irá retornar [["codigo", 11111], ["preco", 12000]]


// // function somarNumeros(dados) {
// //     let soma = 0
// //     dados.forEach(n => soma += n)
// //     console.log(soma)
// // }

// // somarNumeros([10, 110, 10]) // retornará 30
// // somarNumeros([15, 15, 15, 15]) // retornará 60

// function sorte(n) {
//     nSorte = (Math.random() * (10 - 1) + 1).toFixed(0)
//     if (nSorte === n) {
//         console.log(`Parabéns! O número sorteado foi o ${nSorte}`)
//     } else {
//         console.log(`Que pena! O número sorteado foi o ${nSorte}`)
//     }
// }

// sorte(1)
// sorte(2)
// sorte(3)
// sorte(4)
// sorte(5)
// sorte(1)
// sorte(2)
// sorte(3)
// sorte(4)
// sorte(5)
// sorte(1)
// sorte(2)
// sorte(3)
// sorte(4)
// sorte(5)
// sorte(1)
// sorte(2)
// sorte(3)
// sorte(4)
// sorte(5)

// function despesasTotais(dados) {
//     let soma = 0
//     dados.forEach(n => soma += n.preco)
//     console.log(soma)
// }
// despesasTotais([
//         { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
//         { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
//     ]) // retornará 239.99
// despesasTotais([
//         { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
//         { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
//     ]) // retornará 34599.89

// const menorNumero = n => {
//     let menor = n[0]
//     n.forEach(v => menor < v ? mevor = menor : menor = v)

//     console.log(menor)
// }

// menorNumero([10, 5, -35, 65]) // retornará 5

// menorNumero([5, -15, 50, 3]) // retornará -15


// const contarPalavras = str => {
//     let dados = str.split(' ')
//     console.log(dados.length)
// }
// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5

// function contarCaractere(letra, frase) {
//     let dados = frase.split('');
//     let conta = 0
//     dados.forEach(dado => dado === letra ? conta++ : conta = conta)
//     console.log(conta)
// }

// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("e", "ConhEce-te a ti mesmo") // retornará 1

// function buscarPalavrasSemelhantes(busca, dados) {
//     let newDados = []
//     dados.forEach(dado => {
//         if (dado.match(busca)) {
//             newDados.push(dado.match(busca).input)
//         }
//     })
//     console.log(newDados)
// }
// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []



// function removerVogais(str) {
//     palavra = str.replace(/[aeiou]/ig, '')
//     console.log(palavra)
// }



// removerVogais("Fundamentos") // retornará "Fndmnts"
// removerVogais("Cod3r") // retornará "Cd3r"

function filtrarPorQuantidadeDeDigitos(dados, filtro) {
    let retorno = []
    dados.forEach(n => n.toString().length == filtro ? retorno.push(n) : false)
    console.log(retorno)

}
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]