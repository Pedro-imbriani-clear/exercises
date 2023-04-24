//Arrow function
const soma = (a,b) => a +b
console.log(soma(2,3))

//Arrow function(this)
const a = () => console.log(this === exports)
const b = a.bind({})
a()
b()

//parametro default 
function log(texto = 'node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))