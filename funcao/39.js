function swap(vetor1, vetor2) {
    for (let i = 0; i < vetor1.length; i++) {
        [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
    }
    return [vetor1, vetor2]
}
let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 0]
console.log(vetor1, vetor2)
console.log(swap(vetor1, vetor2))