function esperarPor(tempo = 1000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            // console.log('Executando Promise...')
            resolve()
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000)
    })
}
async function executar() {
    let valor = await retornarValor()
    await esperarPor()
    console.log(`Async/Await ${valor}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 2}...`)
    return valor + 3
}
executar().then(console.log)