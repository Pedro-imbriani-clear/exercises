import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'


ReactDOM.render(
    <div>
        <BomDia nome='guilherme' />
        <BoaTarde nome='Barbara'/>
        <BoaNoite nome='Pedro'/>
        <Saudacao tipo='Bom diaa' nome='Joao'/>
        <Pai nome="Paulo" sobrenome='Silva'/>
       
    </div>
    , document.getElementById('root'))