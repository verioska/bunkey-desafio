import React, {Component} from 'react'
import { connect } from 'react-redux';
import {  saveResult  } from '../Action/actionPrincipal';
import './evenOdd.css'


class EvenOdd extends Component{
    constructor(){
        super();
        this.state={
            number: "",
            result:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.calculatedNumber = this.calculatedNumber.bind(this);
}
// Funcion que guarda el valor del input y lo guarda en el estado
    handleChange(e) {
        
        this.setState({ 
            ...this.state,
            number:e.target.value
        });
       
    }
   // Funcion que calcula si es par o impar , ademas guarda si es par o impar en el estado
    calculatedNumber(){
        
        this.refs.number.value="";
        if(this.state.number %2 ===0){
            this.setState({ 
                ...this.state,
                result:'par',
             
                })
            }else{
                this.setState({ 
                    ...this.state,
                    result:'impar'
                })
            }
           
        }
//Funcion que renderiza

    render(){
        return(
            <div className="container">
                <p className="title">¿Par o Impar?</p>
                <div className="containerInput">
                    <input ref="number"  onChange={this.handleChange}  className="numberInput" type="text" placeholder=" Ingresa un número:"/>
                    <button onClick={this.calculatedNumber} className="submit" >Validar</button>
                </div>
                <div className="result">
                    <h1 className="titleresult">  Resultado</h1>
                    <p>El número {this.state.number} es: {this.state.result} </p>
                </div>
            </div>
        )}
    }
 export default  EvenOdd;
