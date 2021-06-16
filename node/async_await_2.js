function gerarNumeroEntre(min, max, numeroProibidos) {
    if (min > max)[max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numeroProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else { resolve(aleatorio) }
    })
}

async function numeroMegaSena(qtdNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) { throw 'Quechato' }
}

numeroMegaSena(8)
    .then(console.log)
    .catch(console.log)