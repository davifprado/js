function gerarNumerosEntre(min, max) {
    min > max ? [min, max] = [max, min] : false
    return new Promise (resolve => {
        const aleatorio = Math.random() * (max - min) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10,30).then(num => num * 10).then(numx10 => `O numero gerado é ${numx10}`).then(console.log)