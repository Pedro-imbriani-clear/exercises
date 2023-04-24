const Fabricantes = ["Meredes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

Fabricantes.forEach(imprimir)
Fabricantes.forEach(Fabricantes => console.log(Fabricantes))