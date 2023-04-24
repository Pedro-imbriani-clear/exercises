Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const Carrinho = [
    '{"nome":"Borracha", "preço":3.45}',
    '{"nome":"Caderno", "preço":13.90}',
    '{"nome":"Kit de Lapis", "preço":41.22}',
    '{"nome":"Caneta", "preço":7.50}'
]

//Retorna um arrey apenas com os preços

const paraObjeto = json=> JSON.parse(json)
const apenasPreco = produto => produto.preço

const resultado = Carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)