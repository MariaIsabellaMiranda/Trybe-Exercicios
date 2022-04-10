import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.poke;
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} poke={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
