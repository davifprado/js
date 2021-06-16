const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
/*Solução Aula */
const chineses = f => f.pais = 'China'
const mulheres = f => f.genero = 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    /* Solução Aula */
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)

    /*Solução Davi*/
    let menorSalario2 = 0
    let menorSalarioId2
    funcionarios.forEach((value, index) => {
        
        if (value.genero === 'F' && value.pais === 'China'){   
            if (menorSalario2 === 0) { 
                menorSalario2 = value.salario 
                menorSalarioId2 = index 
            }
            if (menorSalario2 > value.salario){
                menorSalario2 = value.salario
                menorSalarioId2 = index 
            }
        }
    })
    
    console.log(funcionarios[menorSalarioId2])    
    })
      

    