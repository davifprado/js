//operador ... rest(juntar)/spread(espalhar)
const positivo = {a: 1, b:2}
const positivo2 = {c:3, ...positivo}
console.log(positivo2)

const positivo3 = [1, 3]
const positivo32 = ['c', ...positivo3]
console.log(positivo32)