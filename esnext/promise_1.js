let a = 1 
console.log(a)
let p = new Promise(function (cumpriPromessa) {
    cumpriPromessa([4,5,6,7])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])