const express = require('express')
const server = express()

server.route('/cliente')
    .get((req,res)=> res.send("Lista de Cliente"))
    .post((req,res)=> res.send("Novo Cliente"))
    .put((req,res)=> res.send("ALterar Cliente"))
    .delete((req,res)=> res.send("Delete Cliente"))

server.listen(3000, () => console.log('executando'))