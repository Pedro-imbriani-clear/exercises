import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/PrimeiroComponent";
import { CompA,CompB } from "./components/Componet2";
import Multi from "./components/Multi";
import FamiliaSilva from "./components/FamiliaSilva";
import Familia from "./components/Familia";
import Menbro from "./components/Menbro";

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro value='bom dia'/>
        <CompA value='ola sou A'/>
        <CompB value='ola sou B'/>
        <Multi/>
        <FamiliaSilva/>
        <hr/>
        <Familia sobrenome='Imbriani'>
            <Menbro nome='Pedro'/>
            <Menbro nome='Aline'/>

        </Familia>
     
    </div>
,element)