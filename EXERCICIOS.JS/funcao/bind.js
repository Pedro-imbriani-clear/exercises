const pessoa = {
    saudaçao:'BOm dia',
    falar(){
        console.log(this.saudaçao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//consflito entre paradigmas :funcional e OO

const falarDEpesspa = pessoa.falar.bind(pessoa)
falarDEpesspa()