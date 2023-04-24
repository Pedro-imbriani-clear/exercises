const funcionario = {nome:"Maria", salario:'12199.99'}
const clone = {ativo:true,...funcionario}
console.log(clone)

const grupoA = ['Pedro','Joao','Maria']
const grupoB = ['Ana',...grupoA, 'Carla']
console.log(grupoB)