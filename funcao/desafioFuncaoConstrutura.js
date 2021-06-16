function Pessoa(nome = '') {
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}


Eu = new Pessoa('Davi')
Eu.falar()

Voce = new Pessoa()
Voce.falar()