const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function (){
    console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
},20000)