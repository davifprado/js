console.log(Math.ceil(6.1))
const obj1 = {}

obj1.nome = 'Bola'
    //obj1['nome'] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //Usando o this. você deixa publica a informação na função/objeto
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Davi')
const obj3 = new Obj('Jana')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()