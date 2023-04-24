//funçao literal
function fun1(){}

//armazenar em variavel
const fun2 = function(){}

//armazenar em um arrey

const arrey = [function(a,b){return a + b}, fun1,fun2]

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return'opa'}

//passar funçao como param
function run (fun){
    fun()
}
run(function() {console.log('executando')})

//uma funçao pode retornar uma funçao
function some(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)