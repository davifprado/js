function Produto(nome, preco) {
    return {
        nome: `${nome}`,
        preco: `${preco}`,
        desconto: 0.15 * `${preco}`
    }

}


console.log(Produto("Teste", 10))
console.log(Produto("Teste2", 20))