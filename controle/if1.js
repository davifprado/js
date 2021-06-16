function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade que... ' + valor)
    }
}

seForVerdadeEuFalo('Davi')
seForVerdadeEuFalo() //Returna False
seForVerdadeEuFalo(null) //Returna False
seForVerdadeEuFalo(undefined) //Returna False
seForVerdadeEuFalo(NaN) //Returna False
seForVerdadeEuFalo(0) //Returna False
seForVerdadeEuFalo('') //Returna False
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})