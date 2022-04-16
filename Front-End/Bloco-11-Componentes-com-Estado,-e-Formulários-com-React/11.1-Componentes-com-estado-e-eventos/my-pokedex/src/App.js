import Pokedex from "./pokedex";
import pokemons from "./data";

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <Pokedex poke={pokemons} />
    </>
  );
};

export default App;
