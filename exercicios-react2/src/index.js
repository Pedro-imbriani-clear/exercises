import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/PrimeiroComponent";
import { CompA,CompB } from "./components/Componet2";
import Multi from "./components/Multi";

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro value='bom dia'/>
        <CompA value='ola sou A'/>
        <CompB value='ola sou B'/>
        <Multi/>
    </div>
,element)