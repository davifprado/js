const express = require('express')
const app = express()

app.get('/opa', (req, res) => {
    res.json({
        name: "teste",
        preco: 123.00
    })
    // res.send("Estou bem!")

})

app.listen(3000, () => {
    console.log("Executando 2")
})
 