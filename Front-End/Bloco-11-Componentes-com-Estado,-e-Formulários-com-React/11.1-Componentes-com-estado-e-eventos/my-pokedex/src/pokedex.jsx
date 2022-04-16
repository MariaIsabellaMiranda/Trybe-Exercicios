import React from "react";
import Pokemon from "./Pokemon"
import Button from "./Button";
import AllButton from "./AllButton"

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      filtro: false,
      pokemonsFiltrados: [],
    };
    this.chamaOProximo = this.chamaOProximo.bind(this);
    this.filtraPoke = this.filtraPoke.bind(this);
    this.allButton = this.allButton.bind(this);
  };

  chamaOProximo() {
    const pokemons = this.props.poke;
    const { pokemonIndex, pokemonsFiltrados, filtro } = this.state;
    if (filtro) {
      if(pokemonIndex === pokemonsFiltrados.length -1) {
        this.setState({pokemonIndex: 0})
      } else {
        this.setState((prevState) => ({pokemonIndex: prevState.pokemonIndex + 1}));
      }
    } else {
      if(pokemonIndex === pokemons.length - 1) {
        this.setState({pokemonIndex: 0})
      } else {
        this.setState((prevState) => ({pokemonIndex: prevState.pokemonIndex + 1}));
      }
    }
  }

filtraPoke({ target }) {
  const pokemons = this.props.poke;
  const tipoPoke = pokemons.filter((pokemon) => pokemon.type === target.name);
  this.setState({
    filtro: true,
    pokemonsFiltrados: tipoPoke,
  })
}

allButton() {
  this.setState({
    filtro: false,
  })
}

  render() {
    const pokemons = this.props.poke;
    const { pokemonIndex, filtro, pokemonsFiltrados } = this.state;

    return (
        <div>
          {filtro ? <Pokemon poke={ pokemonsFiltrados[pokemonIndex] }/> 
          : <Pokemon poke={ pokemons[pokemonIndex] } />}
          <button onClick={this.chamaOProximo}>Próximo Pokémon</button>
          <Button tipo={'Fire'} filtraPoke={this.filtraPoke}/>
          <Button tipo={'Psychic'} filtraPoke={this.filtraPoke}/>
          <AllButton allButton={this.allButton}/>
        </div>
    );
  }
};

export default Pokedex;
