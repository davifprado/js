function aritmetica(primeiroTermo, razao, qtdTermos) {
    return primeiroTermo + (qtdTermos - 1) * razao
}

function geometrica(primeiroTermo, razao, qtdTermos) {
    let total = primeiroTermo
    for (let i = 1; i < qtdTermos; i++) {
        total = total * razao
    }
    return total
}



console.log(aritmetica(26, 5, 10))
console.log(geometrica(2, 3, 5))