let valor
console.log(valor)
valor = null

console.log(valor)



const produto = {}

console.log(produto.preco)

console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
    //delete produto.preco
console.log(produto)

produto.preco = null //sem valor
console.log(!!produto.preco)
console.log(produto)