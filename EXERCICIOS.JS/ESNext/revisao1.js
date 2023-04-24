//let e var
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Templete string
const produto = 'Ipad'
console.log(`${produto} é caro`)

//Destructuring
const [l,e, ...tras] = 'Pedro'
console.log(l,e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)
 const {idade:i,nome} = {nome:'Ana', idade:'19'}
 console.log(i,nome)