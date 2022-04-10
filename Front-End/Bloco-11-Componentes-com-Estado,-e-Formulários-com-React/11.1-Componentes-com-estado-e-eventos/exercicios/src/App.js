import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    this.contaEventos1 = this.contaEventos1.bind(this);
    this.contaEventos2 = this.contaEventos2.bind(this);
    this.contaEventos3 = this.contaEventos3.bind(this);
  }

contaEventos1 = () => {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
  }))
}

contaEventos2 = () => {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
  }))
}

contaEventos3 = () => {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
  }))
}

render() {
  const { numeroDeCliques1 } = this.state; //Destructuring pra passar no lint rsrs
  return (
    <>
    <button className='bt1' onClick={this.contaEventos1}>{numeroDeCliques1 % 2 === 0}</button>
    <button className='bt2' onClick={this.contaEventos2}>{this.state.numeroDeCliques2}</button>
    <button className='bt3' onClick={this.contaEventos3}>{this.state.numeroDeCliques3}</button>
    </>
  )
};
}

export default App;
