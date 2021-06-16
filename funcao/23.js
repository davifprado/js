function statusAluno(aluno, n1, n2, n3) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a, b) => a < b ? 1 : -1)
    let media = notas[0] * 0.4 + notas[1] * 0.3 + notas[2] * 0.3
    return `Aluno código ${aluno} - Notas: ${notas[0]}, ${notas[1]}, ${notas[2]} - Média: ${media} - Status ${media > 5 ? 'Aprovado' : 'Reprovado'}`

}

console.log(statusAluno(120, 10, 4, 3))