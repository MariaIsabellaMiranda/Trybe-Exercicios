import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0, 
    };
    this.chamaOProximo = this.chamaOProximo.bind(this);
    this.chamaOProximo = this.filtraPoke.bind(this);
  };

  chamaOProximo() {
    this.setState((prevState, _props) => {
      pokemonIndex: prevState.pokemonIndex + 1;
    })
  }

filtraPoke() {
  const pokemons = this.props.poke;
  const pokeFiltrado = pokemons.filter((pokemon, index) => {pokemon[index] === this.state.pokemonIndex})
  return pokeFiltrado;
}

  render() {
    const pokemons = this.props.poke;
    return (
        <div>
          <button onClick={this.chamaOProximo}>Próximo</button>
          <Pokemon poke={this.filtraPoke}/> 
        </div>
    );
  }
};

export default Pokedex;
