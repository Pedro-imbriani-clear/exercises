const alunos = [
    {nome:'Joao', nota:7.3, bolsista:true},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:true},
    {nome:'Ana', nota:8.7, bolsista:false}
]

//Todos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno é bolsistas?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
