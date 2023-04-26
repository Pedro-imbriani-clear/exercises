import React, { Component } from "react";

export default class Contador extends Component{

    state ={
        numero:0
    }
    maisUM(){
        this.setState({numero:this.state.numero +1})
        //this.state.numero = this.state.numero +1
    }
    render(){
        return(
            <div>
                <div>Numero:{this.state.numero}</div>
                <button onClick={()=>this.maisUM()}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}