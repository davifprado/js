function qtdNotas(valor) {
    notas = []
    if (valor > 100) {
        qtdNota = Math.floor(valor / 100)
        valor = valor - (qtdNota * 100)
        notas.push(`${qtdNota} nota(s) de 100 reais`)
    }
    if (valor > 50) {
        qtdNota = Math.floor(valor / 50)
        valor = valor - (qtdNota * 50)
        notas.push(`${qtdNota} nota(s) de 50 reais`)
    }
    if (valor > 20) {
        qtdNota = Math.floor(valor / 20)
        valor = valor - (qtdNota * 20)
        notas.push(`${qtdNota} nota(s) de 20 reais`)
    }
    if (valor > 10) {
        qtdNota = Math.floor(valor / 10)
        valor = valor - (qtdNota * 10)
        notas.push(`${qtdNota} nota(s) de 10 reais`)
    }
    if (valor > 5) {
        qtdNota = Math.floor(valor / 5)
        valor = valor - (qtdNota * 5)
        notas.push(`${qtdNota} nota(s) de 5 reais`)
    }
    if (valor > 1) {
        qtdNota = Math.floor(valor / 1)
        valor = valor - (qtdNota * 1)
        notas.push(`${qtdNota} nota(s) de 1 reais`)
    }
    return notas
}
console.log(qtdNotas(188))