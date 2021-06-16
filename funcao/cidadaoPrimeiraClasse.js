//Função em JS é First-Class Object (Citizen)
//Higher-order function

//criar de forma literal
function func1() {}

//armazenar funcao em variavel
const func2 = function() {}

//armazenar funcao em array
const array = [function(a, b) { return a + b }, func1, func2]
console.log(array[0](2, 3))

//armazenar funcao em objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//passar funcao como parametro
function run(fun) {
    fun()
}

run(function() { console.log("executar") })

//uma função pode retornar/conter outra funcao

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
const cincoMais = soma(2, 3)
cincoMais(5)