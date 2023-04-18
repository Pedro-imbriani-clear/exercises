const _ = require('lodash')

const alunos =[{
    nome:'Joao',
    nota:7.8
},{
    nome:'Maria',
    nota:8.9

},{
    nome:'Pedro',
    nota:10

}]

const media = _.sumBy(alunos,'nota')/ alunos.length
console.log(media)