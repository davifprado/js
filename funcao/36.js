function vezesParam(vetor, numero) {
    let newVetor = []
    vetor.forEach(n => newVetor.push(n * numero))
    return newVetor
}

function vezesCinco(vetor) {
    let newVetor = []
    vetor.forEach(function(n) { if (n > 5) { newVetor.push(n * numero) } })
    return newVetor
}
vetor = [1, 3, 6, 9, 12, 15]
numero = 2
console.log(vetor)
console.log(vezesParam(vetor, numero))
console.log(vezesCinco(vetor))