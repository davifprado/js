const fs = require('fs')
const caminho = __dirname + '\\dados.txt'

function lerArquivo(caminho) {
   return new Promise (resolve => {
        fs.readFile(caminho, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
        }
        resolve(data)
      })
    })
}


lerArquivo(caminho).then(console.log)