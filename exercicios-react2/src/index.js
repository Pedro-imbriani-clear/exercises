import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/PrimeiroComponent";

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro value='bom dia'/>
    </div>
,element)