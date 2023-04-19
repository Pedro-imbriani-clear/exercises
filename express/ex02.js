const express = require('express')
const server = express()

server.get('/', function(req,res,next){
    console.log('Iniciando')
    next()
    console.log("fim")
})
server.get('/',function(req,res){
    console.log('resposta')
    res.send('<h1>Ola Express</h1>')
})
server.listen(3000, () => console.log('executando'))