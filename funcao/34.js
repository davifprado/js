let s1 = 'abc'
let s2 = 'bca'
let vs1 = s1.split('')
let vs2 = s2.split('')
for (let i = 0; i < vs1.length; i++) {
    for (let j = 0; j < vs2.length; j++) {
        console.log(vs1[i], vs2[j])
    }
}

// console.log(result)