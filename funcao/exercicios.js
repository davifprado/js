// function resultados(a, b) {
//     return `Soma: ${a  + b }, Subtracao: ${a - b}, Multiplicação: ${a*b}, Divisão: ${a/b}`
// }
// console.log('1) ', resultados(10, 20))

// function triagulo(l1, l2, l3) {
//     if (l1 === l2 && l2 === l3 && l1 == l3) {
//         return 'Equilatero'
//     } else if (l1 === l2 || l2 === l3 || l1 == l3) {
//         return 'Isóceles'
//     } else {
//         return 'Escaleno'
//     }
// }
// console.log('2) ', triagulo(3, 2, 3))

// const expoente = (b, e) => Math.pow(b, e)
// console.log('3) ', expoente(3, 3))


// const divisao = (d1, d2) => `Resultado ${ Math.floor(d1 / d2)} e resto ${d1 % d2}`
// console.log('4) ', divisao(27, 22))


// const formatNum = (valorDecimal) => {
//     return `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
// }

// console.log('5) ', formatNum(0.1 + 0.3))


// const jurosSimples = (capitalInicial, prazo, juros) => capitalInicial * (1 + prazo * juros)
// console.log('6) ', jurosSimples(100, 10, 0.02))

// const jurosCompostos = (capitalInicial, prazo, juros) => capitalInicial * ((1 + juros) ** prazo)
// console.log('6) ', jurosCompostos(100, 10, 0.02))


// const bhaskara = (a, b, c) => {
//     let delta = b ** 2 - 4 * a * c
//     if (delta < 0) {
//         return ('Delta é negativo')
//     } else {
//         let r1 = (-b + Math.sqrt(delta)) / (2 * a)
//         let r2 = (-b - Math.sqrt(delta)) / (2 * a)
//         return [r1, r2, delta]
//     }
//     // console.log(delta)
// }

// console.log('7) ', bhaskara(1, -1, -6))
// console.log('7) ', bhaskara(1, -1, 6))